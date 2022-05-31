import { right } from "fp-ts/lib/Either";
import { expectSaga } from "redux-saga-test-plan";
import { getGenericError } from "../../../../../utils/errors";
import mockedProfile from "../../../../../__mocks__/initializedProfile";
import { getProfile } from "../../../store/actions";
import { handleGetProfile } from "../handleGetProfile";

describe("handleGetProfile selector", () => {
  describe("when user profile is loaded successfully with 200 response status", () => {
    it("should return the user profile", async () => {
      const request = jest.fn();
      request.mockImplementation(() =>
        right({ status: 200, value: mockedProfile })
      );
      await expectSaga(handleGetProfile, request, getProfile.request())
        .put(getProfile.success(mockedProfile))
        .run();
    });
  });
  describe("when user profile request fail with a 500 response status", () => {
    it("should return an error", async () => {
      const request = jest.fn();
      request.mockImplementation(() => right({ status: 500 }));
      await expectSaga(handleGetProfile, request, getProfile.request())
        .put(getProfile.failure({ ...getGenericError(new Error("Error")) }))
        .run();
    });
  });
});
