import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Caption, Text, TextInput } from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";
import { validate } from "email-validator";

function SignupForm({ navigation }) {
  const { state, signup } = useContext(AuthContext);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullnameError, setFullnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (state.registered) navigation.navigate("Home");
  }, [state.registered]);

  function handleVerify(input) {
    if (input === "Nombre Completo") {
      if (!fullname) setFullnameError(true);
      else setFullnameError(false);
    } else if (input === "Correo electronico") {
      if (!email) setEmailError(true);
      else if (!validate(email)) setEmailError(true);
      else setEmailError(false);
    } else if (input === "Contraseña") {
      if (!password) setPasswordError(true);
      else if (password.length < 6) setPasswordError(true);
      else setPasswordError(false);
    } else if (input === "Confirma Contraseña") {
      if (!confirmPassword) setConfirmPasswordError(true);
      else if (password !== confirmPassword) setConfirmPasswordError(true);
      else setConfirmPasswordError(false);
    } else if (input === "Registrate") {
      if (
        fullname &&
        email &&
        password &&
        confirmPassword &&
        !fullnameError &&
        !emailError &&
        !passwordError &&
        !confirmPasswordError
      ) {
        try {
          signup(fullname, email, password);
        } catch (error) {
          console.log(error);
        }
      } else setError("Todos los campos son requeridos!");
    }
  }

  return (
    <View>
      {error && <Text>{error}</Text>}
      {state.errorMessage != null && <Text>{state.errorMessage}</Text>}
      <TextInput
        mode="outlined"
        label="Nombre Completo"
        value={fullname}
        onChangeText={setFullname}
        onBlur={() => handleVerify("Nombre Completo")}
      />
      {fullnameError && <Caption>Por favor, ingresa tu nombre</Caption>}
      <TextInput
        mode="outlined"
        label="correo electronico"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        onBlur={() => handleVerify("correo electronico")}
      />
      {emailError && <Caption>Por favor, escriba su correo electronico</Caption>}
      <TextInput
        mode="outlined"
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry
        onBlur={() => handleVerify("Contraseña")}
      />
      {passwordError && (
        <Caption>por favor, Ingrese una contraseña valida. Minimo 6 caracteres</Caption>
      )}
      <TextInput
        mode="outlined"
        label="Confirme su contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        autoCapitalize="none"
        secureTextEntry
        onBlur={() => handleVerify("Confirme su contraseña")}
      />
      {confirmPasswordError && (
        <Caption>Por favor, escriba su confirmacion de contraseña</Caption>
      )}
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => handleVerify("Registrate")}
      >
        Crear Cuenta
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default SignupForm;
