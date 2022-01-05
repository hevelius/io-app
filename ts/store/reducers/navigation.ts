import { getType } from "typesafe-actions";
import {
  navigatorInitCompleted,
  setDebugCurrentRouteName
} from "../actions/debug";
import { Action } from "../actions/types";
import { GlobalState } from "./types";

/**
 * This store section is kept for backwards compatibility (some components are outside the Navigation Context and
 * cannot receive the update when the navigation change. Please don't use to add any new logic based on the currentRoute.
 */
export type NavigationState = {
  currentRoute: string;
  navigatorInitCompleted: boolean;
};

const INITIAL_STATE: NavigationState = {
  currentRoute: "n/a",
  navigatorInitCompleted: false
};

export function navigationReducer(
  state: NavigationState = INITIAL_STATE,
  action: Action
): NavigationState {
  switch (action.type) {
    case getType(setDebugCurrentRouteName):
      return {
        ...state,
        currentRoute: action.payload
      };
    case getType(navigatorInitCompleted):
      return {
        ...state,
        navigatorInitCompleted: true
      };
  }

  return state;
}

/**
 * For debug / backwards compatibility purpose only
 * @deprecated Don't use this selector to create new application logic, will be removed after the upgrade to react-navigation v6
 * @param state
 */
export const currentRouteSelector = (state: GlobalState) =>
  state.navigation.currentRoute;

export const navigatorInitCompletedSelector = (state: GlobalState): boolean =>
  state.navigation.navigatorInitCompleted;
