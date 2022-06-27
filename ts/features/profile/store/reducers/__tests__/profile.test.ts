import * as pot from "italia-ts-commons/lib/pot";
import { createStore } from "redux";
import { appReducer } from "../../../../../store/reducers";
import { applicationChangeState } from "../../../../../store/actions/application";
import { GlobalState } from "../../../../../store/reducers/types";
import { getProfile } from "../../actions";
import mockedProfile from "../../../../../__mocks__/initializedProfile";
import { InitializedProfile } from "../../../../../../definitions/backend/InitializedProfile";
import {
  getGenericError,
  getNetworkErrorMessage,
  NetworkError
} from "../../../../../utils/errors";

const profileMocked: InitializedProfile = {
  ...mockedProfile,
  is_email_enabled: false,
  is_email_validated: undefined
};

const mockFailure: NetworkError = {
  ...getGenericError(new Error("A generic error"))
};

const errorFromFailure = new Error(getNetworkErrorMessage(mockFailure));

describe("Test profile reducer behaviour", () => {
  const globalState: GlobalState = appReducer(
    undefined,
    applicationChangeState("active")
  );

  it("the initial state should be pot.none", () => {
    expect(globalState.features.profile).toEqual(pot.none);
  });

  it("should be pot.noneLoading after the first loading action dispatched", () => {
    const globalState = appReducer(undefined, applicationChangeState("active"));
    const store = createStore(appReducer, globalState as any);

    store.dispatch(getProfile.request());
    const profile = store.getState().features.profile;

    expect(profile).toStrictEqual(pot.noneLoading);
  });

  it("should be pot.some with the response, after the success action", () => {
    const globalState = appReducer(undefined, applicationChangeState("active"));
    const store = createStore(appReducer, globalState as any);

    store.dispatch(getProfile.request());
    store.dispatch(getProfile.success(profileMocked));

    expect(store.getState().features.profile).toStrictEqual(
      pot.some(profileMocked)
    );
  });

  it("should be pot.noneError after the failure action", () => {
    const globalState = appReducer(undefined, applicationChangeState("active"));
    const store = createStore(appReducer, globalState as any);

    store.dispatch(getProfile.request());
    store.dispatch(getProfile.failure(mockFailure));

    expect(store.getState().features.profile).toStrictEqual(
      pot.noneError(errorFromFailure)
    );
  });
});
