import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import * as Yup from "yup";

import Screen from "./Screen";
import routes from "../navigation/routes";
import { Keyboard } from "react-native";

//import usersApi from "../api/users";
//import authApi from "../api/auth";

import {
  AppForm,
  SubmitButton,
  AppFormField,
  ErrorMessage,
} from "../Components/forms";
import colors from "../config/colors";
//import useApi from "../hooks/useApi";
import ActivityIndicator from "../Components/ActivityIndicator";
import AppButton from "../Components/AppButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen({ navigation }) {
  //const registerApi = useApi(usersApi.register);
  //const loginApi = useApi(authApi.login);
  //const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    // const result = await registerApi.request(userInfo);
    // console.log(result);
    // if (!result.ok) {
    //   if (result.data) {
    //     setError(result.data.error);
    //     console.log(result.data.error);
    //   } else {
    //     setError("An unexpected error occured");
    //     console.log(result);
    //   }
    //   return;
    // }
    // const { data: authToken } = await loginApi.request(
    //   userInfo.email,
    //   userInfo.password
    // );
    // auth.logIn(authToken);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1, padding: 10 }}>
        <>
          <Screen>
            {/* <ActivityIndicator
              visible={registerApi.loading || loginApi.loading}
            /> */}
            <AppForm
              initialValues={{ name: "", email: "", password: "" }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <Image
                style={styles.logo}
                source={require("../images/logo.png")}
              />

              <ErrorMessage error={error} visible="true" />
              <AppFormField
                name="name"
                autocCapitalize="none"
                autoCorrect={false}
                icon="account"
                placeholder="Name"
                keyboardType="default"
                textContentType="name"
              />
              <AppFormField
                name="email"
                autocCapitalize="none"
                autoCorrect={false}
                icon="email"
                placeholder="Email"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <AppFormField
                autocCapitalize="none"
                autoCorrect={false}
                name="password"
                icon="lock"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
              <SubmitButton name="Register" color={colors.primary} />
            </AppForm>
            <AppButton
              title={"Back"}
              style={{
                width: "90%",
                alignSelf: "center",
                backgroundColor: "transparent",
                padding: 0,
                margin: 0,
              }}
              text={{
                color: "black",
                fontSize: 12,
              }}
              onPress={() => {
                navigation.navigate(routes.WHO_ARE_YOU);
              }}
              color={colors.primary}
            />
          </Screen>
        </>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
