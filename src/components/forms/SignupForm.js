import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View,TextInput} from "react-native";
import { Button, Caption, Text } from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";
import { validate } from "email-validator";
import { Icon } from "react-native-elements";
import theme from "../../theme";

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
    <View style={{opacity:0.80,margin:5}}>
      {error && <Text>{error}</Text>}
      {state.errorMessage != null && <Text>{state.errorMessage}</Text>}
    <View style={styles.container}>
    <Icon style={styles.icon} 
       type='ionicon' 
       name='md-person'
       size={30}
       color= 'white'
       />
      <TextInput style={styles.input}
        placeholder="Nombre Completo"
        value={fullname}
        onChangeText={setFullname}
        onBlur={() => handleVerify("Nombre Completo")}
      />
    </View>
      {fullnameError && <Caption style={styles.caption}>Por favor, ingresa tu nombre</Caption>}
    <View style={styles.container}>
    <Icon style={styles.icon} 
       type='ionicon' 
       name='md-mail'
       size={30}
       color= 'white'
       />
      <TextInput style={styles.input}
        placeholder="Correo electronico"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        onBlur={() => handleVerify("correo electronico")}
      />
    </View>
      {emailError && <Caption style={styles.caption}>Por favor, escriba su correo electronico</Caption>}
    <View style={styles.container}>
    <Icon style={styles.icon} 
       type='ionicon' 
       name='md-eye-off'
       size={30}
       color= 'white'
     />
      <TextInput style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry
        onBlur={() => handleVerify("Contraseña")}
      />
    </View>
      {passwordError && (
        <Caption style={styles.caption}>Por favor, Ingrese una contraseña valida. Minimo 6 caracteres</Caption>)}
    <View style={styles.container}>
    <Icon style={styles.icon} 
       type='ionicon' 
       name='md-eye-off'
       size={30}
       color= 'white'
    />
      <TextInput style={styles.input}
        placeholder="Confirme su contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        autoCapitalize="none"
        secureTextEntry
        onBlur={() => handleVerify("Confirme su contraseña")}
      />
    </View>
      {confirmPasswordError && (
        <Caption style={styles.caption}>Por favor, escriba su confirmacion de contraseña</Caption>
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
  container: {
    flexDirection: 'row',
  },
  button: {
    marginTop: 10,
    marginBottom: 1,
    marginHorizontal:5,
    color: theme.colors.primary
  },
  input:{
    flex:1,
    height:50,
    padding:10,
    marginHorizontal:5,
    marginVertical:10,
    backgroundColor:theme.colors.white,
    borderRadius:10,
  },
  caption:{
    color:theme.colors.white,
    marginHorizontal:35
  },
  icon:{
    marginTop:'60%'
  }
});

export default SignupForm;
