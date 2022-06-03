import * as React from "react";
import { List } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as pot from "italia-ts-commons/lib/pot";
import I18n from "../../../i18n";
import { GlobalState } from "../../../store/reducers/types";
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
import ScreenContent from "../../../components/screens/ScreenContent";
import { getProfile } from "../store/actions";
import { useOnFirstRender } from "../../../utils/hooks/useOnFirstRender";
import ProfileUserItem from "../components/ProfileUserItem";
import NameSurnameIcon from "../../../../img/assistance/nameSurname.svg";
import FiscalCodeIcon from "../../../../img/assistance/fiscalCode.svg";
import EmailIcon from "../../../../img/assistance/email.svg";
import InfoIcon from "../../../../img/assistance/info.svg";

const contextualHelpMarkdown: ContextualHelpPropsMarkdown = {
  title: "profile.preferences.contextualHelpTitle",
  body: "profile.preferences.contextualHelpContent"
};

type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

/**
 * This is the screen that shows the user profile.
 * @param props
 * @returns
 */
const ProfileMainScreen = (props: Props): React.ReactElement => {
  const navigation = useNavigation();

  useOnFirstRender(() => {
    props.loadProfile();
  });

  const iconSize = 24;

  return (
    <BaseScreenComponent
      contextualHelpMarkdown={contextualHelpMarkdown}
      faqCategories={["profile"]}
      goBack
    >
      {pot.isLoading(props.profile) ? (
        <LoadingErrorComponent
          isLoading={pot.isLoading(props.profile)}
          loadingCaption={I18n.t("features.profile.main.loading")}
          onRetry={props.loadProfile}
          errorText={I18n.t("global.genericError")}
          onAbort={navigation.goBack}
        />
      ) : (
        <ScreenContent title={I18n.t("features.profile.main.title")}>
          <List withContentLateralPadding>
            {/* Show name and surname */}
            {props.fullName.isSome() && (
              <ProfileUserItem
                title={I18n.t("features.profile.data.fullName")}
                subtitle={props.fullName.value}
                icon={<NameSurnameIcon width={iconSize} height={iconSize} />}
              />
            )}
            {/* Show fiscalcode */}
            {props.fiscalCode.isSome() && (
              <ProfileUserItem
                title={I18n.t("features.profile.data.fiscalCode")}
                subtitle={props.fiscalCode.value}
                icon={<FiscalCodeIcon width={iconSize} height={iconSize} />}
              />
            )}
            {/* Show email */}
            {props.email.isSome() && (
              <ProfileUserItem
                title={I18n.t("features.profile.data.email")}
                subtitle={props.email.value}
                icon={<EmailIcon width={iconSize} height={iconSize} />}
              />
            )}
            {/* Show Birthdate */}
            {props.birthDate.isSome() && (
              <ProfileUserItem
                title={I18n.t("features.profile.data.birthDate")}
                subtitle={props.birthDate.value.toLocaleDateString()}
                icon={<InfoIcon width={iconSize} height={iconSize} />}
              />
            )}
          </List>
        </ScreenContent>
      )}
    </BaseScreenComponent>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadProfile: () => dispatch(getProfile.request())
});

const mapStateToProps = (state: GlobalState) => ({
  profile: profileSelector(state),
  fullName: profileFullNameSelector(state),
  email: profileEmailSelector(state),
  fiscalCode: profileFiscalCodeSelector(state),
  birthDate: profileBirthDateSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMainScreen);
