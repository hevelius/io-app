import { List } from "native-base";
import { connect } from "react-redux";
import React from "react";
import { Dispatch } from "redux";
import { View } from "react-native";
import I18n from "../../../i18n";
import NameSurnameIcon from "../../../../img/assistance/nameSurname.svg";
import FiscalCodeIcon from "../../../../img/assistance/fiscalCode.svg";
import EmailIcon from "../../../../img/assistance/email.svg";
import InfoIcon from "../../../../img/assistance/info.svg";
import { GlobalState } from "../../../store/reducers/types";
import {
  profileBirthDateSelector,
  profileEmailSelector,
  profileFiscalCodeSelector,
  profileFullNameSelector
} from "../store/reducers/profile";
import ProfileUserItem from "./ProfileUserItem";

type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

/**
 * This component is used to render a list of use details.
 * @param props
 * @returns
 */
const ProfileUserList = (props: Props) => {
  const iconSize = 24;

  return (
    <View>
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
    </View>
  );
};

const mapDispatchToProps = (_: Dispatch) => ({});

const mapStateToProps = (state: GlobalState) => ({
  fullName: profileFullNameSelector(state),
  email: profileEmailSelector(state),
  fiscalCode: profileFiscalCodeSelector(state),
  birthDate: profileBirthDateSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUserList);
