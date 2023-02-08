import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./navigation/authNavigation";
import { navigationRef } from "./navigation/rootNavigation";
import navigationTheme from "./navigation/navigationTheme";
import RecomendedScreen from "./screens/RecomendedScreen";
import ServiceCard from "./Components/ServiceCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const service = {
    name: "Guitar Tutor",
    wage: "10",
    rating: "5",
    autor: "Adam Turčan",
  };

  const { name, wage, rating, autor } = service;
  const showServDetails = (service) => {};

  return (
    // <NavigationContainer ref={navigationRef} theme={navigationTheme}>
    //   <AuthNavigation />

    <ServiceCard
      name={name}
      autor={autor}
      wage={wage}
      rating={rating}
      onPress={() => {
        showServDetails({});
      }}
    />

    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
