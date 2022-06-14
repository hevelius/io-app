import { ActionType } from "typesafe-actions";
import { call, put } from "typed-redux-saga/macro";
import { readableReport } from "italia-ts-commons/lib/reporters";
import { BackendClient } from "../../../../api/backend";
import { SagaCallReturnType } from "../../../../types/utils";
import { getProfile as loadProfile } from "../../store/actions";
import { getGenericError, getNetworkError } from "../../../../utils/errors";

/**
 * Handle the remote call to retrieve the profile data
 * @param getProfile
 */
export function* handleGetProfile(
  getProfile: ReturnType<typeof BackendClient>["getProfile"],
  _: ActionType<typeof loadProfile.request>
) {
  try {
    const getProfileResult: SagaCallReturnType<typeof getProfile> = yield* call(
      getProfile,
      {}
    );

    if (getProfileResult.isRight()) {
      if (getProfileResult.value.status === 200) {
        yield* put(loadProfile.success(getProfileResult.value.value));
        return;
      } else {
        yield* put(
          loadProfile.failure({ ...getGenericError(new Error(`Error`)) })
        );
      }
    }

    if (getProfileResult.isLeft()) {
      // left side of the Either
      yield* put(
        loadProfile.failure({
          ...getGenericError(new Error(readableReport(getProfileResult.value)))
        })
      );
    }
  } catch (error) {
    yield* put(loadProfile.failure(getNetworkError(error)));
  }
}
