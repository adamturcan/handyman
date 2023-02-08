import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "./Screen";
import Card from "../Components/Card";
//import routes from "../navigation/routes";
//import listingsApi from "../api/listings";
import AppText from "../Components/AppText";
import Button from "../Components/AppButton";
import ActivityIndicator from "../Components/ActivityIndicator";
import AppButton from "../Components/AppButton";
import WhoCard from "../Components/WhoCard";
import colors from "../config/colors";
import routes from "../navigation/routes";
//import useApi from "../hooks/useApi";

export default function WhoAreYouScreen({ navigation }) {
  //const getListingsApi = useApi(listingsApi.getListings);
  const fields = [
    { id: 1, title: "A Customer" },
    { id: 2, title: "A Handyman" },
    { id: 3, title: "An Agency" },
  ];

  useEffect(() => {
    //getListingsApi.request(1, 2, 3);
  }, []);
  const handleRegister = () => {
    if (!who) {
      setHint(true);
    } else {
      navigation.navigate(routes.REGISTER_SCREEN);
    }
  };

  const [who, setWho] = useState();
  const [hint, setHint] = useState(false);
  return (
    <>
      {/* <ActivityIndicator visible={getListingsApi.loading} /> */}
      <Screen style={styles.screen}>
        {/* {getListingsApi.error && !getListingsApi.loading && (
          <>
            <AppText>Couldn't retrieve the listings</AppText>
            <AppButton
              title="Retry"
              color="tomato"
              onPress={getListingsApi.request}
            />
          </>
        )} */}

        {/* {!getListingsApi.loading && ( */}
        <Text style={styles.title}>I am?</Text>
        <Text style={{ ...styles.hint, color: !hint ? "transparent" : "red" }}>
          Please select an option that suits for you
        </Text>
        <FlatList
          data={[...fields]}
          scrollEnabled={false}
          //   data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <WhoCard
              title={item.title}
              //   thumbnailUrl={item.images[0].thumbnailUrl}
              //   subTitle={"$" + item.price}
              //   imageUrl={item.images[0].url}
              onPress={() => {
                setWho(item.title);
                setHint(false);
              }}
            />
          )}
        />
        {/* )} */}
        <AppButton
          title={!who ? "Create Account" : "Continue as " + who}
          style={{
            width: "90%",
            alignSelf: "center",
            backgroundColor: !who ? "transparent" : "red",
            marginTop: 20,
          }}
          text={{
            color: !who ? "red" : "white",
          }}
          onPress={() => handleRegister()}
          color={colors.primary}
        />
        <AppButton
          title={"Already have an account? Log In"}
          style={{
            width: "90%",
            alignSelf: "center",
            backgroundColor: "transparent",
            padding: 0,
            margin: 0,
          }}
          text={{
            color: "black",
            fontSize: 10,
          }}
          onPress={() => {
            navigation.navigate(routes.LOGIN_SCREEN);
          }}
          color={colors.primary}
        />
      </Screen>
    </>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "#f9f4f4",
    flex: 1,
  },
  title: { alignSelf: "center", fontSize: 30 },
  hint: { alignSelf: "center" },
});
