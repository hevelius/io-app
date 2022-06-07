import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IOStyles } from "../../../../components/core/variables/IOStyles";
import BaseScreenComponent from "../../../../components/screens/BaseScreenComponent";
import ScreenContent from "../../../../components/screens/ScreenContent";
import FooterWithButtons from "../../../../components/ui/FooterWithButtons";
import I18n from "../../../../i18n";
import { GlobalState } from "../../../../store/reducers/types";
import { emptyContextualHelp } from "../../../../utils/emptyContextualHelp";
import ProfileUserList from "../../components/ProfileUserList";

type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

const ProfileDeletionConfirmScreen = (_: Props): React.ReactElement => {
  const navigation = useNavigation();

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
    onPress: () => null,
    title: I18n.t("global.buttons.delete")
  };
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

const mapDispatchToProps = (_: Dispatch) => ({});

const mapStateToProps = (_: GlobalState) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDeletionConfirmScreen);
