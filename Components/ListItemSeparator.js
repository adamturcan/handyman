import { View, StyleSheet } from "react-native";
import React from "react";

export default function ListItemSeparator({ style }) {
  return <View style={{ ...styles.separator, ...style }} />;
}
const styles = StyleSheet.create({
  separator: {
    width: "90%",
    height: 2,
    backgroundColor: "#f8f4f4",
    alignSelf: "center",
  },
});
