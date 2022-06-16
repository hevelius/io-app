import React from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import I18n from "../../../i18n";
import { IOStyles } from "../../../components/core/variables/IOStyles";
import { InfoScreenComponent } from "../../../components/infoScreen/InfoScreenComponent";
import { renderInfoRasterImage } from "../../../components/infoScreen/imageRendering";
import FooterWithButtons from "../../../components/ui/FooterWithButtons";
import errorRequest from "../../../../img/pictograms/doubt.png";

const ProfileDeletionError = (): React.ReactElement => {
  const navigation = useNavigation();

  const cancelButtonProps = {
    block: true,
    primary: true,
    onPress: navigation.getParent()?.goBack,
    title: I18n.t("global.buttons.cancel")
  };

  return (
    <SafeAreaView style={IOStyles.flex}>
      <InfoScreenComponent
        image={renderInfoRasterImage(errorRequest)}
        title={I18n.t("features.profile.deletion.requestError")}
      />
      <FooterWithButtons type="SingleButton" leftButton={cancelButtonProps} />
    </SafeAreaView>
  );
};

export default ProfileDeletionError;
