import { useNavigation } from "@react-navigation/core";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WhoAreYouScreen from "../screens/WhoAreYouScreen";

export default function AuthNavigation() {
  const Stack = createNativeStackNavigator();
  const AuthNavigation = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WhoAreYou"
        component={WhoAreYouScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );

  return <AuthNavigation />;
}
