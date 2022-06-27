import * as React from "react";
import { View } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView } from "react-native";
import * as pot from "italia-ts-commons/lib/pot";
import { fromNullable } from "fp-ts/lib/Option";
import I18n from "../../../i18n";
import {
  profileFiscalCodeSelector,
  profileSelector,
  profileEmailSelector,
  profileFullNameSelector,
  profileBirthDateSelector,
  profileDeletionStatusSelector
} from "../store/reducers/profile";
import { LoadingErrorComponent } from "../../bonus/bonusVacanze/components/loadingErrorScreen/LoadingErrorComponent";
import BaseScreenComponent from "../../../components/screens/BaseScreenComponent";
import { getProfile } from "../store/actions";
import { useOnFirstRender } from "../../../utils/hooks/useOnFirstRender";
import ProfileUserItem from "../components/ProfileUserItem";
import NameSurnameIcon from "../../../../img/assistance/nameSurname.svg";
import FiscalCodeIcon from "../../../../img/assistance/fiscalCode.svg";
import EmailIcon from "../../../../img/assistance/email.svg";
import InfoIcon from "../../../../img/assistance/info.svg";
import { useIODispatch, useIOSelector } from "../../../store/hooks";
import { IOStyles } from "../../../components/core/variables/IOStyles";
import { H1 } from "../../../components/core/typography/H1";
import { emptyContextualHelp } from "../../../utils/emptyContextualHelp";
import ProfileStatusSwitchItem from "../components/ProfileStatusSwitchItem";
import { loadUserDataProcessing } from "../../../store/actions/userDataProcessing";
import { UserDataProcessingChoiceEnum } from "../../../../definitions/backend/UserDataProcessingChoice";

/**
 * This is the screen that shows the user profile.
 * @returns
 */
const ProfileMainScreen = (): React.ReactElement => {
  const navigation = useNavigation();
  const dispatch = useIODispatch();

  const notAvailable = I18n.t("global.remoteStates.notAvailable");
  const profile = useIOSelector(profileSelector);
  const fullName = useIOSelector(profileFullNameSelector);
  const email = useIOSelector(profileEmailSelector)
    .fold(notAvailable, _ => _)
    .valueOf();
  const fiscalCode = useIOSelector(profileFiscalCodeSelector).getOrElse(
    notAvailable
  );
  const birthDate = useIOSelector(profileBirthDateSelector)
    .fold(notAvailable, _ => _.toLocaleDateString())
    .valueOf();
  const deletionStatus = useIOSelector(profileDeletionStatusSelector);

  useOnFirstRender(() => {
    dispatch(getProfile.request());
    dispatch(
      loadUserDataProcessing.request(UserDataProcessingChoiceEnum.DELETE)
    );
  });

  const iconSize = 24;

  const itemsProps: ItemProps = {
    fullName,
    fiscalCode,
    email,
    birthDate
  };

  type Item = {
    id?: string;
    title: string;
    subtitle: string;
    icon: React.ReactElement;
  };

  type ItemProps = {
    fullName: string | undefined;
    fiscalCode: string;
    email: string;
    birthDate: string;
  };

  const getItems = (props: ItemProps): ReadonlyArray<Item> => [
    {
      id: "profileFullName",
      icon: <NameSurnameIcon width={iconSize} height={iconSize} />,
      title: I18n.t("features.profile.data.fullName"),
      subtitle: fromNullable(props.fullName).getOrElse(notAvailable)
    },
    {
      id: "profileFiscalCode",
      icon: <FiscalCodeIcon width={iconSize} height={iconSize} />,
      title: I18n.t("features.profile.data.fiscalCode"),
      subtitle: props.fiscalCode
    },
    {
      id: "profileEmail",
      icon: <EmailIcon width={iconSize} height={iconSize} />,
      title: I18n.t("features.profile.data.email"),
      subtitle: props.email
    },
    {
      id: "profileBirthDate",
      icon: <InfoIcon width={iconSize} height={iconSize} />,
      title: I18n.t("features.profile.data.birthDate"),
      subtitle: props.birthDate
    }
  ];

  const items = getItems(itemsProps).filter(it => it.subtitle !== notAvailable);

  if (profile.kind !== "PotSome") {
    return (
      <LoadingErrorComponent
        isLoading={pot.isLoading(profile)}
        loadingCaption={I18n.t("features.profile.main.loading")}
        onRetry={() => dispatch(getProfile.request())}
        errorText={I18n.t("global.genericError")}
        onAbort={navigation.goBack}
      />
    );
  }

  return (
    <BaseScreenComponent
      contextualHelp={emptyContextualHelp}
      faqCategories={["profile"]}
      goBack
    >
      <SafeAreaView style={IOStyles.flex}>
        <ScrollView style={[IOStyles.horizontalContentPadding]}>
          <H1>{I18n.t("features.profile.main.title")}</H1>
          <View>
            {items.map((item, idx) => (
              <ProfileUserItem key={`profile_user_item_${idx}`} {...item} />
            ))}
            {/* Show Deletion Status Switch */}
            {deletionStatus.isSome() && (
              <ProfileStatusSwitchItem
                title={I18n.t("features.profile.main.deletion")}
                value={deletionStatus.value}
              />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </BaseScreenComponent>
  );
};

export default ProfileMainScreen;
