import * as pot from "italia-ts-commons/lib/pot";
import { appReducer } from "../../../../../store/reducers";
import { applicationChangeState } from "../../../../../store/actions/application";

describe("Test profile reducer behaviour", () => {
  it("The initial state should be pot.none", () => {
    const globalState = appReducer(undefined, applicationChangeState("active"));
    expect(globalState.features.profile).toEqual(pot.none);
  });
});
