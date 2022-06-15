import {
  ActionType,
  createAsyncAction,
  createStandardAction
} from "typesafe-actions";
import { NetworkError } from "../../../../utils/errors";
import { InitializedProfile } from "../../../../../definitions/backend/InitializedProfile";

/**
 * The user requests the EU Covid certificate, starting from the auth_code
 */
export const getProfile = createAsyncAction(
  "PROFILE_REQUEST",
  "PROFILE_SUCCESS",
  "PROFILE_FAILURE"
)<void, InitializedProfile, NetworkError>();

export const profileDeletionStart = createStandardAction(
  "PROFILE_DELETION_START"
)<void>();

export const profileDeletionCompleted = createStandardAction(
  "PROFILE_DELETION_COMPLETED"
)<void>();

export const profileDeletionBack = createStandardAction(
  "PROFILE_DELETION_BACK"
)<void>();

export const profileDeletionCancel = createStandardAction(
  "PROFILE_DELETION_CANCEL"
)<void>();

export const profileDeletionFailure = createStandardAction(
  "PROFILE_DELETION_FAILURE"
)<void>();

export type ProfileActions =
  | ActionType<typeof getProfile>
  | ActionType<typeof profileDeletionStart>
  | ActionType<typeof profileDeletionCompleted>
  | ActionType<typeof profileDeletionBack>
  | ActionType<typeof profileDeletionCancel>
  | ActionType<typeof profileDeletionFailure>;
