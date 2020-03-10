import {
  ActionType,
  createAsyncAction,
  createStandardAction
} from "typesafe-actions";
import { UserDataProcessing } from "../../../definitions/backend/UserDataProcessing";
import { UserDataProcessingChoiceEnum } from "../../../definitions/backend/UserDataProcessingChoice";

export const manageUserDataProcessing = createStandardAction(
  "MANAGE_USER_DATA_PROCESSESING"
)<UserDataProcessingChoiceEnum>();

export const loadUserDataProcessing = createAsyncAction(
  "USER_DATA_PROCESSING_LOAD_REQUEST",
  "USER_DATA_PROCESSING_LOAD_SUCCESS",
  "USER_DATA_PROCESSING_LOAD_FAILURE"
)<
  UserDataProcessingChoiceEnum,
  {
    choice: UserDataProcessingChoiceEnum;
    value?: UserDataProcessing;
  },
  { choice: UserDataProcessingChoiceEnum; error: Error }
>();

export const upsertUserDataProcessing = createAsyncAction(
  "USER_DATA_PROCESSING_UPSERT_REQUEST",
  "USER_DATA_PROCESSING_UPSERT_SUCCESS",
  "USER_DATA_PROCESSING_UPSERT_FAILURE"
)<
  UserDataProcessing,
  UserDataProcessing,
  { choice: UserDataProcessingChoiceEnum; error: Error }
>();

export type UserDataProcessingActions =
  | ActionType<typeof loadUserDataProcessing>
  | ActionType<typeof upsertUserDataProcessing>
  | ActionType<typeof manageUserDataProcessing>;
