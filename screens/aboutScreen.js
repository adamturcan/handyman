import { View, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import ServiceItemList from "../Components/ServiceItemList";
import AppButton from "../Components/AppButton";
import routes from "../navigation/routes";
import AboutMeCard from "../Components/AboutMeCard";
import GalleryList from "../Components/GalleryList";
//import useApi from "../hooks/useApi";

export default function AboutScreen({ navigation }) {
  //const getListingsApi = useApi(listingsApi.getListings);

  return (
    <View style={styles.screen}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#f0f0f0",
        }}
      >
        <AppButton
          title="services"
          color="white"
          text={{ color: "black", fontSize: "15" }}
          style={{
            width: "30%",
            margin: 5,
            backgroundColor: "white",
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate(routes.SERVICES_LIST)}
        />
        <AppButton
          title="About me "
          color="white"
          text={{ color: "white", fontSize: "15" }}
          style={{
            width: "30%",
            margin: 5,
            backgroundColor: "red",
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate(routes.ABOUT_INFO)}
        />
        <AppButton
          title="Ratings"
          color="white"
          text={{ color: "black", fontSize: "15" }}
          style={{
            width: "30%",
            margin: 5,
            backgroundColor: "white",
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate(routes.RATINGS)}
        />
      </View>
      <AboutMeCard intro={""} paragraph={""} />
      <GalleryList media={""} />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    height: "100%",
    backgroundColor: "#f0f0f0",
    marginTop: -10,
  },
});
