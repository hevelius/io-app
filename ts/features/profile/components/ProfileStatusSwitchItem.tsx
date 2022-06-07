import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as pot from "italia-ts-commons/lib/pot";
import { RemoteSwitch } from "../../../components/core/selection/RemoteSwitch";
import { H3 } from "../../../components/core/typography/H3";
import ItemSeparatorComponent from "../../../components/ItemSeparatorComponent";
import NEWPROFILE_ROUTES from "../navigation/routes";

type Props = {
  title: string;
  value: pot.Pot<boolean, Error>;
};

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between"
  }
});

/**
 * This component is used to render a single switch in the profile screen.
 * @param props
 * @returns
 */
const ProfileStatusSwitchItem = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.itemRow}>
        <H3 testID={"ProfileSwitchItemTitleTestID"}>{props.title}</H3>
        <RemoteSwitch
          testID={"ProfileRemoteSwitchTestID"}
          value={props.value}
          onValueChange={() =>
            navigation.navigate(NEWPROFILE_ROUTES.DELETION.MAIN, {
              screen: NEWPROFILE_ROUTES.DELETION.INFO
            })
          }
        />
      </View>
      <ItemSeparatorComponent noPadded={true} />
    </View>
  );
};

export default ProfileStatusSwitchItem;
