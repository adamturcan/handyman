import { useNavigation } from "@react-navigation/core";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ServiceListScreen from "../screens/serviceListScreen";
import AboutScreen from "../screens/aboutScreen";
import RatingsScreen from "../screens/ratingsScreen";

export default function AuthNavigation() {
  const Stack = createNativeStackNavigator();
  const ServiceInfoNavigation = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Services"
        component={ServiceListScreen}
        options={{ headerShown: false, animation: "none" }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ headerShown: false, animation: "none" }}
      />
      <Stack.Screen
        name="Ratings"
        component={RatingsScreen}
        options={{ headerShown: false, animation: "none" }}
      />
    </Stack.Navigator>
  );

  return <ServiceInfoNavigation />;
}
