import React, { useRef } from "react";
import { View, Text, StyleSheet, FlatList, Image, Button } from "react-native";
import ExpoFastImage from "expo-fast-image";
import { Video, AVPlaybackStatus } from "expo-av";
import ImageInput from "./ImageInput";
import { StatusBar } from "expo-status-bar";

export default function GalleryList({ media }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View>
      <FlatList
        data={media}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          console.log(item);
          if (item.type == "image") {
            return <ExpoFastImage source={item.source} style={styles.image} />;
          } else {
            return (
              <Video
                ref={video}
                style={styles.video}
                source={require("../images/sigma.mp4")}
                useNativeControls
                resizeMode="contain"
              />
            );
          }
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 20,
    marginLeft: 20,
  },
  video: {
    height: 200,
    width: 300,
    alignSelf: "stretch",
    borderRadius: 20,
    marginLeft: 20,
  },
  button: {
    margin: 10,
  },
});
