import React, { useState } from "react";
import routes from "../navigation/routes";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
//import authApi from "../api/auth";
import * as Yup from "yup";
import Screen from "./Screen";
import { Keyboard } from "react-native";
import {
  AppForm,
  SubmitButton,
  AppFormField,
  ErrorMessage,
} from "../Components/forms";
import colors from "../config/colors";
import AppButton from "../Components/AppButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen({ navigation }) {
  //   const { logIn } = useAuth();

  const [loginFalied, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    // const result = await authApi.login(email, password);

    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    logIn(result.data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1, padding: 10 }}>
        <Screen>
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Image style={styles.logo} source={require("../images/logo.png")} />

            <ErrorMessage
              error="Invalid email and/or password."
              visible={loginFalied}
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
            <SubmitButton name="Login" color={colors.primary} />
          </AppForm>
          <AppButton
            title={"Dont have an account? Sign Up"}
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
            color={colors.primary}
            onPress={() => {
              navigation.navigate(routes.WHO_ARE_YOU);
            }}
          />
        </Screen>
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
