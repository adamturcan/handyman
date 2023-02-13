import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Image } from "react-native-expo-image-cache";
import AppButton from "./AppButton";

export default function AboutMeCard({ paragraph, onPress, name }) {
  let visibleMore;
  let par;
  if (paragraph.length > 214) {
    par = paragraph.slice(0, 200) + "...";
    visibleMore = true;
  } else {
    par = "" + paragraph;
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={{ height: 150 }}>
          <Text style={styles.intro}>Hey, My Name Is {name}</Text>
          <Text style={styles.paragraph}>{par}</Text>
        </View>

        {visibleMore && (
          <AppButton
            title="More..."
            color="white"
            text={{ color: "white", fontSize: "10" }}
            style={{
              width: "20%",
              marginRight: 20,
              backgroundColor: "red",
              borderRadius: 20,
              padding: 5,
              alignSelf: "flex-end",
            }}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    marginTop: 0,
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 20,

    height: 200,
  },
  paragraph: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  intro: {
    margin: 20,
    fontSize: 15,
  },
});
