import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import React, { useRef } from "react";
import ServiceCardList from "./Components/ServiceCardList";
import { NavigationContainer } from "@react-navigation/native";
import Screen from "./screens/Screen";
import { navigationRef } from "./navigation/rootNavigation";
import navigationTheme from "./navigation/navigationTheme";
import ServiceDetails from "./screens/ServiceDetailsScreen";
import GalleryList from "./Components/GalleryList";
import ServiceItemList from "./Components/ServiceItemList";

export default function App() {
  const services = [
    {
      name: "Guitar Lessons",
      services: [
        {
          id: 1,
          name: "Guitar Tutoring",
          price: 10,
          duration: "1 hr",
          rating: 5.0,
        },
        {
          id: 2,
          name: "Guitar Tutoring",
          price: 20,
          duration: "2 hrs",
          rating: 4.9,
        },
        {
          id: 3,
          name: "Guitar Tutoring",
          price: 30,
          duration: "3 hrs",
          rating: 5.0,
        },
      ],
    },
    {
      name: "Language Lessons",
      services: [
        {
          id: 4,
          name: "English Tutoring",
          price: 10,
          duration: "1 hr",
          rating: 4.0,
        },
        {
          id: 5,
          name: "Spanish Tutoring",
          price: 10,
          duration: "1 hr",
          rating: 5.0,
        },
        {
          id: 6,
          name: "German Tutoring",
          price: 10,
          duration: "1 hr",
          rating: 5.0,
        },
      ],
    },
  ];

  return (
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      {/* <AuthNavigation /> */}
      <ServiceDetails />
      {/* {<ServiceItemList services={services} />} */}
    </NavigationContainer>
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
