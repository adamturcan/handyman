import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { AirbnbRating, Rating } from "react-native-ratings";

export default function RatingCard({ name, rating, content, serviceName }) {
  const filledStars = [];
  const nonFilledStars = [];
  for (let i = 0; i < rating; i++) {
    filledStars.push(i);
  }
  for (let i = 0; i < 5 - rating; i++) {
    nonFilledStars.push(i);
  }

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.half}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.half}>
          <View style={styles.stars}>
            {filledStars.map((id) => {
              return (
                <Image
                  key={id}
                  style={{ width: 20, height: 20 }}
                  source={{
                    uri: "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png",
                  }}
                />
              );
            })}
            {nonFilledStars.map((id) => {
              return (
                <Image
                  key={id}
                  style={{ width: 20, height: 20 }}
                  source={{
                    uri: "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png",
                  }}
                />
              );
            })}
          </View>
        </View>
      </View>

      <Text style={styles.service}>{serviceName}</Text>

      <Text style={styles.content}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 170,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 7,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  stars: {
    flexDirection: "row",

    width: "100%",
    paddingRight: 10,
    justifyContent: "flex-end",
  },
  half: {
    height: 30,
    width: "50%",
    flexDirection: "row",
  },
  row: {
    width: "100%",
    flexDirection: "row",
  },
  content: {
    marginLeft: 10,
  },
  service: {
    fontSize: 15,
    color: "gray",
    marginLeft: 10,
    marginBottom: 10,
  },
});
