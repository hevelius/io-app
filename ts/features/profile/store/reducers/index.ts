import { combineReducers } from "redux";
import profileReducer, { ProfileState } from "./profile";

type ProfileUpdatedState = {
  profile: ProfileState;
};

const profileUpdatedReducer = combineReducers<ProfileUpdatedState>({
  profile: profileReducer
});

export default profileUpdatedReducer;
