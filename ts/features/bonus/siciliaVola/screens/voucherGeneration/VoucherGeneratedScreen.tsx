import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SafeAreaView, ScrollView } from "react-native";
import { View } from "native-base";
import { useEffect } from "react";
import { isNone } from "fp-ts/lib/Option";
import BaseScreenComponent from "../../../../../components/screens/BaseScreenComponent";
import { emptyContextualHelp } from "../../../../../utils/emptyContextualHelp";
import { IOStyles } from "../../../../../components/core/variables/IOStyles";
import { H1 } from "../../../../../components/core/typography/H1";
import { GlobalState } from "../../../../../store/reducers/types";
import {
  svGenerateVoucherBack,
  svGenerateVoucherCompleted,
  svGenerateVoucherFailure,
  svGenerateVoucherGeneratedVoucher,
  svGetPdfVoucher
} from "../../store/actions/voucherGeneration";
import FooterWithButtons from "../../../../../components/ui/FooterWithButtons";
import { VoucherRequest } from "../../types/SvVoucherRequest";
import I18n from "../../../../../i18n";
import { H5 } from "../../../../../components/core/typography/H5";
import VoucherInformationComponent from "../../components/VoucherInformationComponent";
import { isVoucherRequest } from "../../utils";
import { voucherRequestSelector } from "../../store/reducers/voucherGeneration/voucherRequest";
import { voucherGeneratedSelector } from "../../store/reducers/voucherGeneration/voucherGenerated";
import { fold, isLoading, isReady } from "../../../bpd/model/RemoteValue";
import { LoadingErrorComponent } from "../../../bonusVacanze/components/loadingErrorScreen/LoadingErrorComponent";
import SvGeneratedVoucherTimeoutScreen from "./ko/SvGeneratedVoucherTimeoutScreen";
import { selectedPdfVoucherStateSelector } from "../../store/reducers/selectedVoucher";
import { showToast } from "../../../../../utils/showToast";

type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

const VoucherGeneratedScreen = (props: Props): React.ReactElement | null => {
  const {
    remoteVoucherGenerated,
    maybeVoucherRequest,
    generateVoucherRequest,
    pdfVoucherState
  } = props;

  useEffect(() => {
    maybeVoucherRequest.map(vR => {
      if (isVoucherRequest(vR)) {
        generateVoucherRequest(vR);
      }
    });
  }, [maybeVoucherRequest, generateVoucherRequest]);

  useEffect(() => {
    fold(
      pdfVoucherState,
      () => null,
      () => null,
      _ => showToast(I18n.t("bonus.sv.pdfVoucher.toast.ok"), "success"),
      _ => showToast(I18n.t("bonus.sv.pdfVoucher.toast.ko"))
    );
  }, [pdfVoucherState]);

  const backButtonProps = {
    primary: false,
    bordered: true,
    onPress: props.completed,
    title: I18n.t("global.buttons.exit")
  };

  const continueButtonProps = {
    primary: true,
    onPress: props.stampaVoucher,
    title: I18n.t("global.genericSave")
  };

  if (isNone(maybeVoucherRequest)) {
    props.failure("Voucher request is None");
    return null;
  }
  const voucherRequest = maybeVoucherRequest.value;
  if (!isVoucherRequest(voucherRequest)) {
    props.failure("Partial voucher request is not a complete voucher request");
    return null;
  }

  if (!isReady(remoteVoucherGenerated)) {
    return (
      <BaseScreenComponent
        goBack={false}
        contextualHelp={emptyContextualHelp}
        headerTitle={I18n.t("bonus.sv.headerTitle")}
      >
        <LoadingErrorComponent
          isLoading={isLoading(remoteVoucherGenerated)}
          loadingCaption={I18n.t("global.remoteStates.loading")}
          onRetry={() => props.generateVoucherRequest(voucherRequest)}
        />
      </BaseScreenComponent>
    );
  }

  const voucherGenerated = remoteVoucherGenerated.value;

  switch (voucherGenerated.kind) {
    // TODO: manage conflict and other state when the final swagger is available
    case "success":
      return (
        <BaseScreenComponent
          goBack={false}
          contextualHelp={emptyContextualHelp}
          headerTitle={I18n.t("bonus.sv.headerTitle")}
        >
          <SafeAreaView style={IOStyles.flex} testID={"VoucherGeneratedScreen"}>
            <ScrollView style={[IOStyles.horizontalContentPadding]}>
              <H1>
                {I18n.t("bonus.sv.voucherGeneration.voucherGenerated.title")}
              </H1>
              <View spacer />
              <H5 weight={"Regular"}>
                {I18n.t("bonus.sv.voucherGeneration.voucherGenerated.subtitle")}
              </H5>
              <View spacer />
              <VoucherInformationComponent
                voucherCode={voucherGenerated.value.id.toString()}
                qrCode={voucherGenerated.value.qrCode}
                barCode={voucherGenerated.value.barCode}
              />
              <View spacer large={true} />
            </ScrollView>
            <FooterWithButtons
              type={"TwoButtonsInlineHalf"}
              leftButton={backButtonProps}
              rightButton={continueButtonProps}
            />
          </SafeAreaView>
        </BaseScreenComponent>
      );
    case "timeout":
      return <SvGeneratedVoucherTimeoutScreen />;
  }
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  back: () => dispatch(svGenerateVoucherBack()),
  completed: () => dispatch(svGenerateVoucherCompleted()),
  failure: (reason: string) => dispatch(svGenerateVoucherFailure(reason)),
  generateVoucherRequest: (voucherRequest: VoucherRequest) =>
    dispatch(svGenerateVoucherGeneratedVoucher.request(voucherRequest)),
  stampaVoucher: () => dispatch(svGetPdfVoucher.request())
});
const mapStateToProps = (state: GlobalState) => ({
  maybeVoucherRequest: voucherRequestSelector(state),
  remoteVoucherGenerated: voucherGeneratedSelector(state),
  pdfVoucherState: selectedPdfVoucherStateSelector(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VoucherGeneratedScreen);
