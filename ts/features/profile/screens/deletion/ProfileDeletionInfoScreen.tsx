import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import I18n from "../../../../i18n";
import { InfoBox } from "../../../../components/box/InfoBox";
import { H4 } from "../../../../components/core/typography/H4";
import { IOStyles } from "../../../../components/core/variables/IOStyles";
import BaseScreenComponent from "../../../../components/screens/BaseScreenComponent";
import FooterWithButtons from "../../../../components/ui/FooterWithButtons";
import { emptyContextualHelp } from "../../../../utils/emptyContextualHelp";
import { H2 } from "../../../../components/core/typography/H2";
import NEWPROFILE_ROUTES from "../../navigation/routes";

const styles = StyleSheet.create({
  column: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    flex: 1
  }
});

const ProfileDeletionInfoScreen = (): React.ReactElement => {
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
    onPress: () => {
      navigation.navigate(NEWPROFILE_ROUTES.DELETION.CONFIRM, {
        screen: NEWPROFILE_ROUTES.DELETION.CONFIRM
      });
    },
    title: I18n.t("global.buttons.continue")
  };

  return (
    <BaseScreenComponent
      headerTitle={I18n.t("features.profile.deletion.startTitle")}
      goBack={true}
      contextualHelp={emptyContextualHelp}
    >
      <SafeAreaView style={IOStyles.flex}>
        <View style={styles.column}>
          <InfoBox iconName={"io-warning"} iconSize={32}>
            <H2>{I18n.t("global.genericAlert")}</H2>
            <H4 weight={"Regular"}>
              {I18n.t("features.profile.deletion.message")}
            </H4>
          </InfoBox>
        </View>
        <FooterWithButtons
          type="TwoButtonsInlineThird"
          leftButton={cancelButtonProps}
          rightButton={continueButtonProps}
        />
      </SafeAreaView>
    </BaseScreenComponent>
  );
};

export default ProfileDeletionInfoScreen;
