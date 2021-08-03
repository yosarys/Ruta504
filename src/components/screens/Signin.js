import React from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground,StatusBar, ScrollView} from "react-native";
import { Text } from "react-native-paper";
import SigninForm from "../forms/SigninForm";
import theme from "../../theme/index";

function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <ImageBackground source= {require('../../../assets/fondo.jpg')} blurRadius={0.8} style={{flex: 1}}>
      <View style={{top:'25%'}}>
        <Text style={styles.text}>Ruta504</Text>
      </View>
      <ScrollView style={{top:'30%'}}>
         <SigninForm/>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
         <Text style={{marginHorizontal:10,fontWeight:'bold'}}>¿No tienes una cuenta? 
           <Text style={styles.signin}> Registrate</Text>
         </Text>
         </TouchableOpacity>
      </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  signin: {
    color: theme.colors.primary,
    fontWeight:'bold'
  },
  text:{
    fontSize:45,
    fontFamily: 'Parisienne_400Regular',
    textAlign: 'center',
    color: theme.colors.white
  },
});

export default Signin;
