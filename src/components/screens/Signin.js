import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import SigninForm from "../forms/SigninForm";

function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <SigninForm />
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text>
        ¿No tienes una cuenta? <Text style={styles.signup}>Registrate</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: 'white',
  },
  forgotPassword: {
    textAlign: "auto",
  },
  signup: {
    color: 'blue',
  },
});

export default Signin;
np