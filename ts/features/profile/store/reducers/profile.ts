import { getType } from "typesafe-actions";
import * as pot from "italia-ts-commons/lib/pot";
import { InitializedProfile } from "../../../../../definitions/backend/InitializedProfile";
import { Action } from "../../../../store/actions/types";
import { getErrorFromNetworkError } from "../../../../utils/errors";
import { getProfile } from "../actions";

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

export default profileReducer;
