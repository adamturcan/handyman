import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Image } from "react-native-expo-image-cache";

export default function WhoCard({
  title,
  subTitle,
  imageUrl,
  onPress,
  thumbnailUrl,
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
          <Text style={styles.title}>{title}</Text>
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
  title: {
    marginTop: 5,
    fontSize: "20",
    color: "black",
  },
});
