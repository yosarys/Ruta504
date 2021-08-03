import React from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground,StatusBar, ScrollView} from "react-native";
import { Text } from "react-native-paper";
import SignupForm from "../forms/SignupForm";
import theme from "../../theme";

function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar/>
       <ImageBackground source= {require('../../../assets/fondo.jpg')}  blurRadius={0.8}  style={{flex: 1,}}>
         <ScrollView>
            <View>
              <Text style={styles.text}>Registro</Text>
            </View>
            <View style={{marginVertical:'8%'}}>
              <SignupForm />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{marginHorizontal:10,fontWeight:'bold'}}>¿Ya tiene una cuenta?<Text style={styles.signup}>  Inicia Sesion</Text></Text>
         </TouchableOpacity>
             </View>
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
  signup: {
    color:theme.colors.primary,
    fontWeight:'bold'
  },
  text:{
    fontSize:45,
    color:'white',
    fontFamily:'Parisienne_400Regular',
    textAlign: 'center',
    marginTop:'30%'
  },
});

export default Signup;
