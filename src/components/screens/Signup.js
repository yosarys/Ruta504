import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import SignupForm from "../forms/SignupForm";

function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <SignupForm />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>¿Ya tiene una cuenta?<Text style={styles.signin}>inicia Sesion</Text>
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
  signin: {
    color:'blue',
  },
});

export default Signup;
