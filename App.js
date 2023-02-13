import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import React, { useRef } from "react";
import ServiceCardList from "./Components/ServiceCardList";

import Screen from "./screens/Screen";
import ServiceDetails from "./screens/ServiceDetailsScreen";
import GalleryList from "./Components/GalleryList";

export default function App() {
  const service = {
    name: "Guitar Tutor",
    wage: "10",
    rating: "5",
    autor: "Adam Turčan",
  };

  const { name, wage, rating, autor } = service;
  const showServDetails = (service) => {};
  const scrrollView = useRef();
  return (
    // <NavigationContainer ref={navigationRef} theme={navigationTheme}>
    //   <AuthNavigation />
    <ServiceDetails />

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
