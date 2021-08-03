import React, { useState, useContext } from "react";
import { StyleSheet, View,TextInput} from "react-native";
import { Button, Caption, Text} from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";
import { Icon } from "react-native-elements";
import theme from "../../theme";

function SigninForm() {
  const { state, signin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");

  function handleVerify(input) {
    if (input === "email") {
      if (!email) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      if (!password) setPasswordError(true);
      else setPasswordError(false);
    } else if (input === "signin") {
      if (email && password && !emailError && !passwordError) {
        signin(email, password);
      }
    }
  }

  return (
    <View style={{opacity:0.80,margin:5}}>
      {state.errorMessage != null && <Text>{state.errorMessage}</Text>}
    <View style={styles.container}>
      <Icon style={styles.icon} 
       type='ionicon' 
       name='md-person'
       size={30}
       color= 'white'
       />
      <TextInput style={styles.input}
        placeholder=" Correo electronico"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
        onBlur={() => handleVerify("email")}
      />
    </View>
      {emailError && (
        <Caption style={styles.caption}>Por favor ingresa tu cuenta de correo electrónico</Caption>
      )}
    <View style={styles.container}>
     <Icon style={styles.icon} 
       type='ionicon' 
       name='md-eye-off'
       size={30}
       color= 'white'
      />
      <TextInput  style={styles.input}
        mode="flat"
        placeholder=" Contraseña"
        autoCapitalize="none"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        onBlur={() => handleVerify("password")}/>
    </View>  
      {passwordError && <Caption style={styles.caption}>Por favor ingresa tu contraseña</Caption>}
      <Button
        mode="contained"
        
        onPress={() => handleVerify("signin")}
      >
       Iniciar Sesion
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
    color: theme.colors.primary,
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
    color:theme.colors.black,
    marginHorizontal:35
  },
  icon:{
    marginTop:'60%'
  }
});

export default SigninForm;
