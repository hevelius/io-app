import { ActionType, createAsyncAction } from "typesafe-actions";
import { NetworkError } from "../../../../utils/errors";
import { InitializedProfile } from "../../../../../definitions/backend/InitializedProfile";

/**
 * The user requests the EU Covid certificate, starting from the auth_code
 */
export const getProfile = createAsyncAction(
  "PROFILE_GET_REQUEST",
  "PROFILE_GET_SUCCESS",
  "PROFILE_GET_FAILURE"
)<void, InitializedProfile, NetworkError>();

export type ProfileActions = ActionType<typeof getProfile>;
