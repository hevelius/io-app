import { SagaIterator } from "redux-saga";
import { call, takeLatest } from "typed-redux-saga/macro";
import { ActionType } from "typesafe-actions";
import { BackendClient } from "../../../api/backend";
import { getProfile as loadProfile } from "../store/actions";
import { handleGetProfile } from "./networking/handleGetProfile";
/**
 * Handle the profile requests
 * @param client
 */
export function* watchProfileSaga(
  client: ReturnType<typeof BackendClient>
): SagaIterator {
  // handle the request of getting profile
  yield* takeLatest(
    loadProfile.request,
    function* (action: ActionType<typeof loadProfile.request>) {
      yield* call(handleGetProfile, client.getProfile, action);
    }
  );
}
