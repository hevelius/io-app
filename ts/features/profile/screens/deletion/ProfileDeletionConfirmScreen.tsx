import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import { UserDataProcessingChoiceEnum } from "../../../../../definitions/backend/UserDataProcessingChoice";
import { IOStyles } from "../../../../components/core/variables/IOStyles";
import BaseScreenComponent from "../../../../components/screens/BaseScreenComponent";
import ScreenContent from "../../../../components/screens/ScreenContent";
import FooterWithButtons from "../../../../components/ui/FooterWithButtons";
import I18n from "../../../../i18n";
import { upsertUserDataProcessing } from "../../../../store/actions/userDataProcessing";
import { useIODispatch, useIOSelector } from "../../../../store/hooks";
import { emptyContextualHelp } from "../../../../utils/emptyContextualHelp";
import { showToast } from "../../../../utils/showToast";
import ProfileUserList from "../../components/ProfileUserList";
import NEWPROFILE_ROUTES from "../../navigation/routes";
import {
  profileDeletionCompleted,
  profileDeletionFailure
} from "../../store/actions";
import {
  profileDeletionErrorSelector,
  profileDeletionSuccessSelector
} from "../../store/reducers/profile";

const ProfileDeletionConfirmScreen = (): React.ReactElement => {
  const navigation = useNavigation();
  const dispatch = useIODispatch();
  const deleteUserProfile = () =>
    dispatch(
      upsertUserDataProcessing.request(UserDataProcessingChoiceEnum.DELETE)
    );
  const didSendDeletionRequest = useIOSelector(profileDeletionSuccessSelector);
  const deletionError = useIOSelector(profileDeletionErrorSelector);

  const cancelButtonProps = {
    block: true,
    light: true,
    bordered: true,
    onPress: navigation.goBack,
    title: I18n.t("global.buttons.cancel")
  };

  const continueButtonProps = {
    block: true,
    primary: true,
    onPress: deleteUserProfile,
    title: I18n.t("global.buttons.delete")
  };

  React.useEffect(() => {
    if (didSendDeletionRequest) {
      dispatch(profileDeletionCompleted());
      navigation.navigate(NEWPROFILE_ROUTES.DELETION.TYP);
    }
    if (deletionError) {
      dispatch(profileDeletionFailure());
      showToast("Error deleting profile");
    }
  }, [didSendDeletionRequest, navigation, dispatch, deletionError]);

  return (
    <BaseScreenComponent
      headerTitle={I18n.t("features.profile.deletion.confirmTitle")}
      goBack={true}
      contextualHelp={emptyContextualHelp}
    >
      <SafeAreaView style={IOStyles.flex}>
        <ScreenContent title={I18n.t("features.profile.main.title")}>
          <ProfileUserList />
        </ScreenContent>
        <FooterWithButtons
          type="TwoButtonsInlineThird"
          leftButton={cancelButtonProps}
          rightButton={continueButtonProps}
        />
      </SafeAreaView>
    </BaseScreenComponent>
  );
};

export default ProfileDeletionConfirmScreen;
