import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as pot from "italia-ts-commons/lib/pot";
import I18n from "../../../i18n";
import { GlobalState } from "../../../store/reducers/types";
import {
  profileSelector,
  profileDeletionStatusSelector
} from "../store/reducers/profile";
import { LoadingErrorComponent } from "../../bonus/bonusVacanze/components/loadingErrorScreen/LoadingErrorComponent";
import BaseScreenComponent, {
  ContextualHelpPropsMarkdown
} from "../../../components/screens/BaseScreenComponent";
import ScreenContent from "../../../components/screens/ScreenContent";
import { getProfile } from "../store/actions";
import { useOnFirstRender } from "../../../utils/hooks/useOnFirstRender";
import ProfileStatusSwitchItem from "../components/ProfileStatusSwitchItem";
import { loadUserDataProcessing } from "../../../store/actions/userDataProcessing";
import { UserDataProcessingChoiceEnum } from "../../../../definitions/backend/UserDataProcessingChoice";
import ProfileUserList from "../components/ProfileUserList";

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
    props.loadProfileDeletionStatus();
  });

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
          <ProfileUserList />
          {/* Show Deletion Status Switch */}
          {props.profileDeletionStatus.isSome() && (
            <ProfileStatusSwitchItem
              title={I18n.t("features.profile.main.deletion")}
              value={props.profileDeletionStatus.value}
              onRetry={props.loadProfileDeletionStatus}
            />
          )}
        </ScreenContent>
      )}
    </BaseScreenComponent>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadProfile: () => dispatch(getProfile.request()),
  loadProfileDeletionStatus: () =>
    dispatch(
      loadUserDataProcessing.request(UserDataProcessingChoiceEnum.DELETE)
    )
});

const mapStateToProps = (state: GlobalState) => ({
  profile: profileSelector(state),
  profileDeletionStatus: profileDeletionStatusSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMainScreen);
