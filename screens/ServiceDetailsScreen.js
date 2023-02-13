import { View, Text, StyleSheet, Image } from "react-native";
// import { Image } from "react-native-expo-image-cache";
import React, { useState } from "react";
import ProfileItem from "../Components/ProfileItem";
import ServiceItem from "../Components/ServiceItem";
import AppButton from "../Components/AppButton";
import ServiceItemList from "../Components/ServiceItemList";
import AboutMeCard from "../Components/AboutMeCard";
import GalleryList from "../Components/GalleryList";
export default function ServiceDetails({ route }) {
  //const listing = route.params;

  const [showServ, setShowServ] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showRatings, setShowRatings] = useState(false);

  const changeSelection = (selection) => {
    switch (selection) {
      case "services":
        {
          setShowServ(true);
          setShowRatings(false);
          setShowAbout(false);
        }
        break;
      case "ratings":
        {
          setShowServ(false);
          setShowRatings(true);
          setShowAbout(false);
        }
        break;
      case "about":
        {
          setShowServ(false);
          setShowRatings(false);
          setShowAbout(true);
        }
        break;
    }
  };

  const services = [
    {
      name: "Guitar Lessons",
      services: [
        {
          id: 1,
          name: "Guitar Tutoring",
          price: 10,
          duration: "1 hr",
          rating: 5.0,
        },
        {
          id: 2,
          name: "Guitar Tutoring",
          price: 20,
          duration: "2 hrs",
          rating: 4.9,
        },
        {
          id: 3,
          name: "Guitar Tutoring",
          price: 30,
          duration: "3 hrs",
          rating: 5.0,
        },
      ],
    },
    {
      name: "Language Lessons",
      services: [
        {
          id: 4,
          name: "English Tutoring",
          price: 10,
          duration: "1 hr",
          rating: 4.0,
        },
        {
          id: 5,
          name: "Spanish Tutoring",
          price: 10,
          duration: "1 hr",
          rating: 5.0,
        },
        {
          id: 6,
          name: "German Tutoring",
          price: 10,
          duration: "1 hr",
          rating: 5.0,
        },
      ],
    },
  ];

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
          title={""}
          wage={""}
          price={""}
          rating={""}
          totalRatings={""}
          made={""}
          specializations={""}
        />
        <View style={{ flexDirection: "row" }}>
          <AppButton
            title="services"
            color="white"
            text={{ color: showServ ? "white" : "black", fontSize: "15" }}
            style={{
              width: "30%",
              margin: 5,
              backgroundColor: showServ ? "red" : "white",
              borderRadius: 20,
            }}
            onPress={() => changeSelection("services")}
          />
          <AppButton
            title="About me "
            color="white"
            text={{ color: showAbout ? "white" : "black", fontSize: "15" }}
            style={{
              width: "30%",
              margin: 5,
              backgroundColor: showAbout ? "red" : "white",
              borderRadius: 20,
            }}
            onPress={() => changeSelection("about")}
          />
          <AppButton
            title="Ratings"
            color="white"
            text={{ color: showRatings ? "white" : "black", fontSize: "15" }}
            style={{
              width: "30%",
              margin: 5,
              backgroundColor: showRatings ? "red" : "white",
              borderRadius: 20,
            }}
            onPress={() => changeSelection("ratings")}
          />
        </View>

        {/* navigation ---!!! */}
        {showServ && <ServiceItemList services={services} />}
        {showAbout && (
          <AboutMeCard
            name={""}
            paragraph={
              " aisdoja daisd aidoa daoidj oadjaod jaoid oad jaoidjaoid jaoidjao djao dajodi ajodiajdo iajdoa jdoai daodjaod aoidjaod ajojid aoidjaodja oda odia odijoasd jaoi sda da d asd ad ada dadada d asd adas asd ad ad a da da sd"
            }
          />
        )}
        {showAbout && (
          <GalleryList
            media={[
              { id: 1, type: "video", source: require("../images/sigma.mp4") },
              { id: 2, type: "image", source: require("../images/guitar.jpg") },
            ]}
          />
        )}
        {/* {showRatings && <RatingsList />} */}

        {/* Navigation ---!!! */}
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
