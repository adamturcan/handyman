import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Image } from "react-native-expo-image-cache";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ServiceCard({
  name,
  autor,
  imageUrl,
  onPress,
  thumbnailUrl,
  wage,
  rating,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          uri={imageUrl}
          preview={{ uri: thumbnailUrl }}
          tint="light"
        />
        <View
          style={{
            margin: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.autor}>{autor}</Text>
              <Text style={styles.name}>{name}</Text>
            </View>
            <View style={{ flex: 1, paddingTop: 2 }}>
              <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                <MaterialCommunityIcons
                  name="star"
                  color={"black"}
                  size={15}
                  style={{ paddingTop: 6 }}
                />
                <Text style={styles.rating}>{rating}</Text>
              </View>

              <Text style={styles.wage}>{wage}$/hr</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 25,
    overflow: "hidden",
    width: "80%",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 100,
  },
  autor: {
    marginTop: 5,
    fontSize: "20",
    color: "black",
  },
  name: {
    marginTop: 5,
    fontSize: "15",
    color: "gray",
  },
  wage: {
    marginTop: 5,
    fontSize: "15",
    color: "green",
    alignSelf: "flex-end",
  },
  rating: {
    marginTop: 5,
    fontSize: "15",
    color: "black",
    alignSelf: "flex-end",
  },
});
