import { View } from "native-base";
import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { IORenderHtml } from "../../../../../components/core/IORenderHtml";
import { Body } from "../../../../../components/core/typography/Body";
import { H4 } from "../../../../../components/core/typography/H4";
import { Link } from "../../../../../components/core/typography/Link";
import I18n from "../../../../../i18n";
import { isStringNullyOrEmpty } from "../../../../../utils/strings";
import { MvlData } from "../../../types/mvlData";

type Props = {
  body: MvlData["body"];
};
const styles = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap" }
});

type RenderMode = "plain" | "html";

const PlainBody = (props: { text: string }): React.ReactElement | null =>
  isStringNullyOrEmpty(props.text) ? null : <Body>{props.text}</Body>;

const HtmlBody = (props: { html: string }): React.ReactElement | null => {
  if (isStringNullyOrEmpty(props.html)) {
    return null;
  }
  return <IORenderHtml source={{ html: props.html }} />;
};

const Content = (props: {
  mode: RenderMode;
  body: MvlData["body"];
}): React.ReactElement => {
  switch (props.mode) {
    case "plain":
      return <PlainBody text={props.body.plain} />;
    case "html":
      return <HtmlBody html={props.body.html} />;
  }
};

const SelectorItem = (props: {
  currentSelected: boolean;
  text: string;
  onPress: () => void;
}) =>
  props.currentSelected ? (
    <H4 weight={"Regular"} color={"bluegreyLight"}>
      {props.text}
    </H4>
  ) : (
    <Link onPress={() => props.onPress()}>{props.text}</Link>
  );

const Selector = (props: {
  currentValue: RenderMode;
  onValueChanged: (mode: RenderMode) => void;
}) => (
  <View style={styles.row}>
    <SelectorItem
      currentSelected={props.currentValue === "plain"}
      text={I18n.t("features.mvl.details.body.plain")}
      onPress={() => props.onValueChanged("plain")}
    />
    <H4 weight={"Regular"} accessible={false}>
      {" | "}
    </H4>
    <SelectorItem
      currentSelected={props.currentValue === "html"}
      text={I18n.t("features.mvl.details.body.html")}
      onPress={() => props.onValueChanged("html")}
    />
  </View>
);

/**
 * Render the body of a legal message, allows the user to choose between plain text or html representation
 * TODO: this is a placeholder, will be implemented in https://pagopa.atlassian.net/browse/IAMVL-23
 * @constructor
 * @param props
 */
export const MvlBody = (props: Props): React.ReactElement => {
  const [mode, setMode] = useState<RenderMode>("plain");

  return (
    <>
      <Content mode={mode} body={props.body} />
      <Selector currentValue={mode} onValueChanged={setMode} />
    </>
  );
};
