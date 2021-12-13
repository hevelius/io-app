import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { none } from "fp-ts/lib/Option";
import * as pot from "italia-ts-commons/lib/pot";
import { NavigationInjectedProps } from "react-navigation";
import I18n from "../../../i18n";
import BaseScreenComponent, {
  ContextualHelpProps
} from "../../../components/screens/BaseScreenComponent";
import { IOStyles } from "../../../components/core/variables/IOStyles";
import View from "../../../components/ui/TextWithIcon";
import {
  getZendeskConfig,
  ZendeskStartPayload,
  zendeskSupportBack,
  zendeskSupportCompleted
} from "../store/actions";
import ZendeskSupportComponent from "../components/ZendeskSupportComponent";
import { ContextualHelpData } from "../../../components/ContextualHelp/ContextualHelpComponent";
import { getContextualHelpDataFromRouteSelector } from "../../../store/reducers/content";
import { loadContextualHelpData } from "../../../store/actions/content";
import { useIOSelector } from "../../../store/hooks";
import { getFAQsFromCategories } from "../../../utils/faq";
import ActivityIndicator from "../../../components/ui/ActivityIndicator";
import themeVariables from "../../../theme/variables";
import { isStringNullyOrEmpty } from "../../../utils/strings";
import { H3 } from "../../../components/core/typography/H3";
import FAQComponent from "../../../components/FAQComponent";
import {
  getContextualHelpData,
  reloadContextualHelpDataThreshold
} from "../../../components/screens/BaseScreenComponent/utils";
import Markdown from "../../../components/ui/Markdown";

type FaqManagerProps = Pick<
  ZendeskStartPayload,
  "contentLoaded" | "faqCategories" | "startingRoute"
> & { title: string; body: () => React.ReactNode };

/**
 * This component must be used only here.
 * Make the {@link ZendeskSupportHelpCenter} compatible with {@link BaseScreenComponent} and substitute the {@link ContextualHelp}
 * It show the title and the FAQ of the contextual help.
 * @constructor
 */
const FaqManager = (props: FaqManagerProps) => {
  const dispatch = useDispatch();
  const potContextualData = useIOSelector(
    getContextualHelpDataFromRouteSelector(props.startingRoute)
  );
  const maybeContextualData = pot.getOrElse(potContextualData, none);
  const loadContextualHelp = () => dispatch(loadContextualHelpData.request());

  const [contentHasLoaded, setContentHasLoaded] = useState<boolean | undefined>(
    undefined
  );
  const [lastContextualDataUpdate, setLastContextualDataUpdate] =
    useState<Date>(new Date());
  const { title, body, faqCategories, contentLoaded } = props;
  useEffect(() => {
    const now = new Date();
    // if the contextual data is empty or is in error and last reload was done before the threshold -> try to reload
    if (
      now.getTime() - lastContextualDataUpdate.getTime() >
        reloadContextualHelpDataThreshold &&
      !pot.isLoading(potContextualData) &&
      pot.isNone(potContextualData)
    ) {
      setLastContextualDataUpdate(now);
      loadContextualHelp();
    }
  }, [lastContextualDataUpdate, potContextualData, loadContextualHelpData]);

  const contextualHelpData: ContextualHelpData = getContextualHelpData(
    maybeContextualData,
    {
      title,
      faqs: getFAQsFromCategories(faqCategories ?? []),
      content: body()
    },
    () => setContentHasLoaded(true)
  );

  /**
   content is loaded when:
   - provided one from props is loaded or
   - when the remote one is loaded
   */
  const isContentLoaded = maybeContextualData.fold(
    contentLoaded,
    _ => contentHasLoaded
  );

  const isContentReady = contextualHelpData.content === undefined;

  return (
    <>
      {isContentReady && (
        <View centerJustified={true}>
          <ActivityIndicator color={themeVariables.brandPrimaryLight} />
        </View>
      )}
      {!isContentReady && (
        <>
          {!isStringNullyOrEmpty(contextualHelpData.title) && (
            <>
              <H3 accessible={true}>{contextualHelpData.title}</H3>
              <View spacer={true} />
            </>
          )}
          {contextualHelpData.content && (
            <>
              {contextualHelpData.content}
              <View spacer={true} />
            </>
          )}
          {contextualHelpData.faqs && isContentLoaded && (
            <FAQComponent
              onLinkClicked={() => true}
              faqs={contextualHelpData.faqs}
            />
          )}
        </>
      )}
    </>
  );
};

type Props = NavigationInjectedProps<ZendeskStartPayload>;
/**
 * Ingress screen to access the Zendesk assistance tool
 * the user can choose to open a new ticket, follow previous conversations or read the faqs
 * @constructor
 */
const ZendeskSupportHelpCenter = (props: Props) => {
  const dispatch = useDispatch();
  const workUnitBack = () => dispatch(zendeskSupportBack());
  const workUnitComplete = () => dispatch(zendeskSupportCompleted());

  // Navigation prop
  const faqCategories = props.navigation.getParam("faqCategories");
  const contextualHelp = props.navigation.getParam("contextualHelp");
  const startingRoute = props.navigation.getParam("startingRoute");

  const [markdownContentLoaded, setMarkdownContentLoaded] = useState<boolean>(
    // if the contextual help is not markdown, consider it as already loaded
    contextualHelp.kind !== "markdown"
  );

  const getContextualHelpConfig = (): ContextualHelpProps => {
    switch (contextualHelp.kind) {
      case "markdown":
        return {
          body: () => (
            <Markdown
              onLinkClicked={workUnitComplete}
              onLoadEnd={() => setMarkdownContentLoaded(true)}
            >
              {I18n.t(contextualHelp.value.body)}
            </Markdown>
          ),
          title: I18n.t(contextualHelp.value.title)
        };
      case "props":
        return {
          body: contextualHelp.value.body,
          title: contextualHelp.value.title
        };
    }
  };
  /**
   * as first step request the config (categories + panicmode) that could
     be used in the next steps (possible network error are handled in {@link ZendeskAskPermissions})
   */
  useEffect(() => {
    dispatch(getZendeskConfig.request());
  }, [dispatch]);
  const contextualHelpConfig = getContextualHelpConfig();
  return (
    <BaseScreenComponent
      showInstabugChat={false}
      customGoBack={<View />}
      customRightIcon={{
        iconName: "io-close",
        onPress: workUnitBack,
        accessibilityLabel: I18n.t("global.accessibility.contextualHelp.close")
      }}
      headerTitle={I18n.t("support.helpCenter.header")}
    >
      <SafeAreaView
        style={IOStyles.flex}
        testID={"ZendeskSupportHelpCenterScreen"}
      >
        <ScrollView style={[IOStyles.horizontalContentPadding]}>
          <FaqManager
            title={contextualHelpConfig.title}
            body={contextualHelpConfig.body}
            faqCategories={faqCategories}
            contentLoaded={markdownContentLoaded}
            startingRoute={startingRoute}
          />
          <View spacer />
          <ZendeskSupportComponent />
        </ScrollView>
      </SafeAreaView>
    </BaseScreenComponent>
  );
};

export default ZendeskSupportHelpCenter;
