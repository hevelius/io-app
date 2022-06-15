import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import ProfileDeletionConfirmScreen from "../screens/deletion/ProfileDeletionConfirmScreen";
import ProfileDeletionInfoScreen from "../screens/deletion/ProfileDeletionInfoScreen";
import ProfileDeletionTypScreen from "../screens/deletion/ProfileDeletionTypScreen";
import { NewProfileParamsList } from "./params";
import NEWPROFILE_ROUTES from "./routes";

const Stack = createStackNavigator<NewProfileParamsList>();

export const NewProfileDeletionStackkNavigator = () => (
  <Stack.Navigator
    initialRouteName={NEWPROFILE_ROUTES.DELETION.MAIN}
    headerMode={"none"}
    screenOptions={{ gestureEnabled: false }}
  >
    <Stack.Screen
      name={NEWPROFILE_ROUTES.DELETION.INFO}
      component={ProfileDeletionInfoScreen}
    />
    <Stack.Screen
      name={NEWPROFILE_ROUTES.DELETION.CONFIRM}
      component={ProfileDeletionConfirmScreen}
    />
    <Stack.Screen
      name={NEWPROFILE_ROUTES.DELETION.TYP}
      component={ProfileDeletionTypScreen}
    />
  </Stack.Navigator>
);
