import { getType } from "typesafe-actions";
import * as pot from "italia-ts-commons/lib/pot";
import { createSelector } from "reselect";
import { fromNullable, none, Option, some } from "fp-ts/lib/Option";
import { InitializedProfile } from "../../../../../definitions/backend/InitializedProfile";
import { Action } from "../../../../store/actions/types";
import { getErrorFromNetworkError } from "../../../../utils/errors";
import { getProfile } from "../actions";
import { GlobalState } from "../../../../store/reducers/types";
import { EmailAddress } from "../../../../../definitions/backend/EmailAddress";
import { UserDataProcessingStatusEnum } from "../../../../../definitions/backend/UserDataProcessingStatus";

export type ProfileState = pot.Pot<InitializedProfile, Error>;

const INITIAL_STATE: ProfileState = pot.none;

const profileReducer = (
  state: ProfileState = INITIAL_STATE,
  action: Action
): ProfileState => {
  switch (action.type) {
    case getType(getProfile.request):
      return pot.toLoading(state);
    case getType(getProfile.success):
      return pot.some(action.payload);
    case getType(getProfile.failure):
      return pot.toError(state, getErrorFromNetworkError(action.payload));
  }
  return state;
};

export const profileSelector = (state: GlobalState): ProfileState =>
  state.features.profile;

export const profileFullNameSelector = createSelector(
  profileSelector,
  (profile: ProfileState): string | undefined =>
    pot.getOrElse(
      pot.map(profile, p => `${p.name} ${p.family_name}`),
      undefined
    )
);

export const profileBirthDateSelector = createSelector(
  profileSelector,
  (profile: ProfileState): Option<Date> =>
    pot.getOrElse(
      pot.map(profile, p => fromNullable(p.date_of_birth)),
      none
    )
);

export const profileFiscalCodeSelector = createSelector(
  profileSelector,
  (profile: ProfileState): Option<string> =>
    pot.getOrElse(
      pot.map(profile, p => fromNullable(p.fiscal_code)),
      none
    )
);

export const profileEmailSelector = createSelector(
  profileSelector,
  (profile: ProfileState): Option<EmailAddress> =>
    pot.getOrElse(
      pot.map(profile, p => fromNullable(p.email)),
      none
    )
);

const userDataStatusToBoolean = (
  status: UserDataProcessingStatusEnum | undefined
): boolean =>
  status === UserDataProcessingStatusEnum.PENDING ||
  status === UserDataProcessingStatusEnum.WIP;

/**
 * This selector returns true if the user has a PENDING or a WIP status
 * @param state
 * @returns
 */
export const profileDeletionStatusSelector = (
  state: GlobalState
): pot.Pot<boolean, Error> =>
  pot.fold(
    state.userDataProcessing.DELETE,
    () => pot.none as pot.Pot<boolean, Error>,
    () => pot.noneLoading,
    value => pot.noneUpdating(userDataStatusToBoolean(value?.status)),
    error => pot.noneError(error),
    value => pot.some(userDataStatusToBoolean(value?.status)),
    value => pot.someLoading(userDataStatusToBoolean(value?.status)),
    (oldValue, newValue) =>
      pot.someUpdating(
        userDataStatusToBoolean(oldValue?.status),
        userDataStatusToBoolean(newValue?.status)
      ),
    (value, error) =>
      pot.someError(userDataStatusToBoolean(value?.status), error)
  );

export default profileReducer;
