import React, { useEffect, useState } from "react";
import { Animated, Easing } from "react-native";

import LottieView from "lottie-react-native";
import { View } from "react-native";

export default function ActivityIndicator({ visible = false }) {
  if (visible == false) return null;

  const [progress, setProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(progress, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }),
      { iterations: 1000 }
    ).start();
  });

  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        zIndex: 1,
        position: "absolute",
        width: "100%",
        backgroundColor: "white",
        opacity: 0.8,
      }}
    >
      {/* <LottieView
        progress={progress}
        loop={true}
        style={{ width: 400, alignSelf: "center" }}
        // source={require("../assets/animations/loader.json")}
      /> */}
    </View>
  );
}
