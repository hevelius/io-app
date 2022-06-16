import React from "react";
import { StyleSheet } from "react-native";
import { View } from "native-base";
import * as pot from "italia-ts-commons/lib/pot";
import { useNavigation } from "@react-navigation/native";
import ButtonDefaultOpacity from "../../../components/ButtonDefaultOpacity";
import I18n from "../../../i18n";
import { H3 } from "../../../components/core/typography/H3";
import { Body } from "../../../components/core/typography/Body";
import customVariables from "../../../theme/variables";
import NEWPROFILE_ROUTES from "../navigation/routes";
import { useIOSelector } from "../../../store/hooks";
import { profileDeletionStatusSelector } from "../store/reducers/profile";

const styles = StyleSheet.create({
  contentPadding: {
    padding: customVariables.contentPadding,
    paddingBottom: 0
  }
});

const ProfileWalletButton = (): React.ReactElement => {
  const navigation = useNavigation();
  const profileDeletionStatus = useIOSelector(profileDeletionStatusSelector);

  return (
    <View style={styles.contentPadding}>
      <View spacer={true} large={true} />
      <H3 weight="SemiBold" color="bluegreyDark">
        {I18n.t("profile.main.title")}
      </H3>
      <View spacer={true} />
      <ButtonDefaultOpacity
        block={true}
        light={true}
        bordered={true}
        small={true}
        disabled={
          pot.isSome(profileDeletionStatus)
            ? profileDeletionStatus.value
            : false
        }
        onPress={() =>
          navigation.navigate(NEWPROFILE_ROUTES.DELETION.MAIN, {
            screen: NEWPROFILE_ROUTES.DELETION.INFO
          })
        }
      >
        <Body color={"blue"}>
          {I18n.t("profile.main.privacy.removeAccount.title")}
        </Body>
      </ButtonDefaultOpacity>
    </View>
  );
};

export default ProfileWalletButton;
