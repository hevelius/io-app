import * as React from "react";
import { List } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView } from "react-native";
import * as pot from "italia-ts-commons/lib/pot";
import I18n from "../../../i18n";
import {
  profileFiscalCodeSelector,
  profileSelector,
  profileEmailSelector,
  profileFullNameSelector,
  profileBirthDateSelector
} from "../store/reducers/profile";
import { LoadingErrorComponent } from "../../bonus/bonusVacanze/components/loadingErrorScreen/LoadingErrorComponent";
import BaseScreenComponent, {
  ContextualHelpPropsMarkdown
} from "../../../components/screens/BaseScreenComponent";
import { getProfile } from "../store/actions";
import { useOnFirstRender } from "../../../utils/hooks/useOnFirstRender";
import ProfileUserItem from "../components/ProfileUserItem";
import NameSurnameIcon from "../../../../img/assistance/nameSurname.svg";
import FiscalCodeIcon from "../../../../img/assistance/fiscalCode.svg";
import EmailIcon from "../../../../img/assistance/email.svg";
import InfoIcon from "../../../../img/assistance/info.svg";
import { useIODispatch, useIOSelector } from "../../../store/hooks";
import { IOStyles } from "../../../components/core/variables/IOStyles";
import { H1 } from "../../../components/core/typography/H1";

const contextualHelpMarkdown: ContextualHelpPropsMarkdown = {
  title: "profile.preferences.contextualHelpTitle",
  body: "profile.preferences.contextualHelpContent"
};

/**
 * This is the screen that shows the user profile.
 * @param props
 * @returns
 */
const ProfileMainScreen = (): React.ReactElement => {
  const navigation = useNavigation();
  const dispatch = useIODispatch();

  const notAvailable = I18n.t("global.remoteStates.notAvailable");
  const profile = useIOSelector(profileSelector);
  const fullName = useIOSelector(profileFullNameSelector).getOrElse(
    notAvailable
  );
  const email = useIOSelector(profileEmailSelector)
    .fold(notAvailable, _ => _)
    .toString();

  const fiscalCode = useIOSelector(profileFiscalCodeSelector).getOrElse(
    notAvailable
  );
  const birthDate = useIOSelector(profileBirthDateSelector)
    .fold(notAvailable, _ => _.toLocaleDateString())
    .toString();

  useOnFirstRender(() => {
    dispatch(getProfile.request());
  });

  const iconSize = 24;

  const itemsProps: ItemProps = {
    fullName,
    fiscalCode,
    email,
    birthDate
  };

  type Item = {
    id?: string;
    title: string;
    subtitle: string;
    icon: React.ReactElement;
  };

  type ItemProps = {
    fullName: string;
    fiscalCode: string;
    email: string;
    birthDate: string;
  };

  const getItems = (props: ItemProps): ReadonlyArray<Item> => [
    {
      id: "profileFullName",
      icon: <NameSurnameIcon width={iconSize} height={iconSize} />,
      title: I18n.t("features.profile.data.fullName"),
      subtitle: props.fullName
    },
    {
      id: "profileFiscalCode",
      icon: <FiscalCodeIcon width={iconSize} height={iconSize} />,
      title: I18n.t("features.profile.data.fiscalCode"),
      subtitle: props.fiscalCode
    },
    {
      id: "profileEmail",
      icon: <EmailIcon width={iconSize} height={iconSize} />,
      title: I18n.t("features.profile.data.email"),
      subtitle: props.email
    },
    {
      id: "profileBirthDate",
      icon: <InfoIcon width={iconSize} height={iconSize} />,
      title: I18n.t("features.profile.data.birthDate"),
      subtitle: props.birthDate
    }
  ];

  const items = getItems(itemsProps).filter(it => it.subtitle !== notAvailable);

  return (
    <BaseScreenComponent
      contextualHelpMarkdown={contextualHelpMarkdown}
      faqCategories={["profile"]}
      goBack
    >
      {pot.isLoading(profile) ? (
        <LoadingErrorComponent
          isLoading={pot.isLoading(profile)}
          loadingCaption={I18n.t("features.profile.main.loading")}
          onRetry={() => dispatch(getProfile.request())}
          errorText={I18n.t("global.genericError")}
          onAbort={navigation.goBack}
        />
      ) : (
        <SafeAreaView style={IOStyles.flex}>
          <ScrollView style={[IOStyles.horizontalContentPadding]}>
            <H1>{I18n.t("features.profile.main.title")}</H1>
            <List>
              {items.map((item, idx) => (
                <ProfileUserItem key={`profile_user_item_${idx}`} {...item} />
              ))}
            </List>
          </ScrollView>
        </SafeAreaView>
      )}
    </BaseScreenComponent>
  );
};

export default ProfileMainScreen;
