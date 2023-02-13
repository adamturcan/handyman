import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import React, { useRef } from "react";
import ServiceCard from "./ServiceCard";

export default function ServiceCardList() {
  const services = [
    {
      id: 1,
      name: "Guitar Tutor",
      wage: "10",
      rating: "5",
      autor: "Adam Turčan",
      imageUrl: require("../images/guitar.jpg"),
      profilePic: require("../images/profile.webp"),
    },
    {
      id: 2,
      name: "Piano Tutor",
      wage: "10",
      rating: "5",
      autor: "Kristina Turčanová",
      imageUrl: require("../images/piano.jpg"),
      profilePic: require("../images/profile2.jpg"),
    },
  ];

  const showServDetails = (service) => {};
  const scrrollView = useRef();
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={{ paddingLeft: 20 }}
    >
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={services}
        keyExtractor={(service) => service.id.toString()}
        renderItem={({ item }) => (
          <ServiceCard
            name={item.name}
            autor={item.autor}
            wage={item.wage}
            rating={item.rating}
            imageUrl={item.imageUrl}
            profilePic={item.profilePic}
          />
        )}
      />
    </ScrollView>
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
