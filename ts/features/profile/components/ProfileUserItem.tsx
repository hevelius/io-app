import React from "react";
import { StyleSheet, View } from "react-native";
import { H3 } from "../../../components/core/typography/H3";
import { H4 } from "../../../components/core/typography/H4";
import ItemSeparatorComponent from "../../../components/ItemSeparatorComponent";
import customVariables from "../../../theme/variables";

type Props = {
  title: string;
  subtitle: string;
  icon: React.ReactElement;
};

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  rightPadding: {
    paddingRight: customVariables.contentPadding
  }
});

/**
 * This component is used to render a single item in the profile screen.
 * It is composed by a left icon, a title and a subtitle.
 * @param props
 * @returns
 */
const ProfileUserItem = (props: Props) => (
  <View>
    <View style={styles.itemRow}>
      <View style={styles.rightPadding} testID={"ProfileUserItemIconTestID"}>
        {props.icon}
      </View>
      <View>
        <H3 testID={"ProfileUserItemTitleTestID"}>{props.title}</H3>
        <H4 testID={"ProfileUserItemSubTitleTestID"} weight={"Regular"}>
          {props.subtitle}
        </H4>
      </View>
    </View>
    <ItemSeparatorComponent noPadded={true} />
  </View>
);

export default ProfileUserItem;
