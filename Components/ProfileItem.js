import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ProfileItem({
  title,
  specializations,
  wage,
  image,
  rating,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    // <Swipeable
    //   renderRightActions={renderRightActions}
    //   containerStyle={{ overflow: "visible" }}
    // >
    //   <TouchableHighlight
    //     onPress={onPress}
    //     underlayColor={"#f9f4f4"}
    //     style={{ width: "100%" }}
    //   >
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <View
        style={{
          flex: 1,
          marginLeft: 10,
          justifyContent: "center",
          overflow: "visible",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.autor}>{title}</Text>
            <Text style={styles.name}>{specializations}</Text>
          </View>
          <View style={{ flex: 1, paddingTop: 2 }}>
            <View style={styles.rating}>
              <MaterialCommunityIcons
                name="star"
                color={"black"}
                size={15}
                style={{ paddingTop: 6 }}
              />
              <Text style={styles.rating}>{rating}</Text>
            </View>

            <Text style={styles.wage}>${wage}/hr.</Text>
          </View>
        </View>
      </View>
      {/* <MaterialCommunityIcons
        name="chevron-right"
        size={25}
        color={colors.medium}
        style={{ alignSelf: "center" }}
      /> */}
    </View>
    //   </TouchableHighlight>
    // </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    overflow: "visible",
    borderRadius: 20,
    width: Dimensions.get("window").width,
    height: 100,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginTop: 15,
    marginLeft: 5,
  },
  autor: {
    marginTop: 5,
    fontSize: "20",
    color: "black",
  },
  name: {
    marginTop: 10,
    fontSize: "15",
    color: "gray",
  },
  wage: {
    marginRight: 20,
    fontSize: "15",
    color: "green",

    alignSelf: "flex-end",
  },
  rating: {
    fontSize: "20-",
    color: "black",
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: 20,
    marginBottom: 5,
  },
});
