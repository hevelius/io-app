import * as React from "react";
import { useEffect } from "react";
import { constNull } from "fp-ts/lib/function";
import * as pot from "italia-ts-commons/lib/pot";

import { useIODispatch, useIOSelector } from "../../../../store/hooks";

import I18n from "../../../../i18n";
import { profileDeletionStatusSelector } from "../../store/reducers/profile";
import { upsertUserDataProcessing } from "../../../../store/actions/userDataProcessing";
import { UserDataProcessingChoiceEnum } from "../../../../../definitions/backend/UserDataProcessingChoice";
import { LoadingErrorComponent } from "../../../bonus/bonusVacanze/components/loadingErrorScreen/LoadingErrorComponent";
import ProfileDeletionSuccess from "../../components/ProfileDeletionSuccess";
import ProfileDeletionError from "../../components/ProfileDeletionError";

const LoadingComponent = () => (
  <LoadingErrorComponent
    isLoading={true}
    loadingCaption={I18n.t(
      "bonus.cdc.bonusRequest.bonusRequested.loading.title"
    )}
    loadingSubtitle={I18n.t(
      "bonus.cdc.bonusRequest.bonusRequested.loading.subtitle"
    )}
    onRetry={constNull}
    testID={"loadingComponent"}
  />
);

const ProfileDeletionRouterSuccess = () => {
  const dispatch = useIODispatch();
  const profileDeletionStatus = useIOSelector(profileDeletionStatusSelector);

  useEffect(() => {
    dispatch(
      upsertUserDataProcessing.request(UserDataProcessingChoiceEnum.DELETE)
    );
  }, [dispatch]);

  if (pot.isError(profileDeletionStatus)) {
    return <ProfileDeletionError />;
  }

  return pot.fold(
    profileDeletionStatus,
    () => <LoadingComponent />,
    () => <LoadingComponent />,
    () => <LoadingComponent />,
    _ => <ProfileDeletionError />,
    _ => <ProfileDeletionSuccess />,
    _ => <LoadingComponent />,
    _ => <LoadingComponent />,
    _ => <ProfileDeletionError />
  );
};

export default ProfileDeletionRouterSuccess;
