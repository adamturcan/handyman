import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ServiceCard({
  name,
  autor,
  imageUrl,
  onPress,
  thumbnailUrl,
  profilePic,
  wage,
  rating,
}) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          defaultSource={imageUrl}
          preview={{ uri: thumbnailUrl }}
        />
        <Image
          style={styles.person}
          defaultSource={profilePic}
          preview={{ uri: thumbnailUrl }}
        />
        <View
          style={{
            margin: 15,
            paddingTop: 35,
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

              <Text style={styles.wage}>{wage}$/hr.</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
    width: "100%",
    margin: 20,
    padding: 10,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 110,
    position: "absolute",
    borderRadius: 10,
  },
  autor: {
    marginTop: 5,
    fontSize: "15",
    color: "black",
  },
  name: {
    marginTop: 5,
    fontSize: "10",
    color: "gray",
  },
  wage: {
    marginTop: 5,
    fontSize: "10",
    color: "green",
    alignSelf: "flex-end",
  },
  rating: {
    marginTop: 5,
    fontSize: "15",
    color: "black",
    alignSelf: "flex-end",
  },
  person: {
    width: 60,
    height: 60,
    borderRadius: 35,
    top: 15,
    left: 10,
  },
});
