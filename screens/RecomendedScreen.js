import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Screen from "./Screen";
import Card from "../Components/Card";
import routes from "../navigation/routes";
//import listingsApi from "../api/listings";
import AppText from "../Components/AppText";
// import Button from "../components/AppButton";
import ActivityIndicator from "../Components/ActivityIndicator";
import AppButton from "../Components/AppButton";
import { ScrollView } from "react-native-gesture-handler";
//import useApi from "../hooks/useApi";

export default function RecomendedScreen({ navigation }) {
  //const getListingsApi = useApi(listingsApi.getListings);
  const scrrollView = useRef();
  useEffect(() => {
    //getListingsApi.request(1, 2, 3);
  }, []);

  return <View></View>;
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "#f9f4f4",
    flex: 1,
  },
});
