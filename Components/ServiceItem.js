import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ServiceItem({ service }) {
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
    <TouchableOpacity style={{ borderRadius: 20 }}>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            justifyContent: "center",
            overflow: "visible",
            borderRadius: 20,
          }}
        >
          <View style={{ flexDirection: "row", borderRadius: 20 }}>
            <View style={{ flex: 1, borderRadius: 20 }}>
              <Text style={styles.autor}>{service.name}</Text>
              <Text style={styles.name}>
                {service.duration ? service.duration : ""}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 2, borderRadius: 20 }}>
              <View style={styles.rating}>
                <MaterialCommunityIcons
                  name="star"
                  color={"black"}
                  size={15}
                  style={{ paddingTop: 6 }}
                />
                <Text style={styles.rating}>{service.rating}</Text>
              </View>

              <Text style={styles.wage}>${service.price}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
    //   </TouchableHighlight>
    // </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    overflow: "visible",
    borderRadius: 20,
    width: Dimensions.get("window").width,
    height: 80,
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
    fontSize: "20",
    color: "green",
    marginRight: 35,
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
