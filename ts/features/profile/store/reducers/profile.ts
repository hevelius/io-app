import { getType } from "typesafe-actions";
import * as pot from "italia-ts-commons/lib/pot";
import { createSelector } from "reselect";
import { fromNullable, none, Option } from "fp-ts/lib/Option";
import { InitializedProfile } from "../../../../../definitions/backend/InitializedProfile";
import { Action } from "../../../../store/actions/types";
import { getErrorFromNetworkError } from "../../../../utils/errors";
import { getProfile } from "../actions";
import { GlobalState } from "../../../../store/reducers/types";
import { EmailAddress } from "../../../../../definitions/backend/EmailAddress";

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

export default profileReducer;
