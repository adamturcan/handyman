import React from "react";

import ProfileItem from "../Components/ProfileItem";
import { View, StyleSheet, Image } from "react-native";
import ServiceInfoNavigation from "../navigation/serviceInfoNavigation";

export default function ServiceDetails() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
      <View
        style={{
          flex: 0.56,
        }}
      >
        <Image
          defaultSource={require("../images/guitar.jpg")}
          //   preview={{ uri: listing.images[0].thumbnailUrl }}
          tint="light"
          // uri={listing.images[0].url}
          style={styles.image}
        />

        <ProfileItem
          title={"Adam"}
          wage={"10"}
          price={""}
          rating={"5"}
          image={require("../images/profile.webp")}
          totalRatings={""}
          made={""}
          specializations={"Guitar tutoring"}
        />
        <View
          style={{
            height: "115%",
            marginTop: 10,
            borderRadius: 25,
          }}
        >
          <ServiceInfoNavigation />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 180,
    borderRadius: 20,
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "400",
  },
  subTitle: {
    color: "cyan",
    fontSize: 18,
    fontWeight: "500",
  },
});
