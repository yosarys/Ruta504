import React, { useContext} from "react";
import { View,StyleSheet, TouchableOpacity, ScrollView,ImageBackground, Dimensions} from 'react-native';
import {IconButton,Text} from 'react-native-paper';
import { Context as AuthContext } from "../../providers/AuthContext";
import Header from "../AppBar";

const { height, width } = Dimensions.get("screen");

function Home({ navigation }) {
const { signout } = useContext(AuthContext);

    return (   
<View style={styles.container}> 
   <Header/>
    <ScrollView> 
    <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
       <View style={{marginTop:10}}>
         <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Departaments')}>
         <ImageBackground source={require('../../../assets/Lugares.png')} style={{flex:1}}>
            <Text style={styles.text}>Lugares Turisticos</Text>
          </ImageBackground>
        </TouchableOpacity> 
    
        <TouchableOpacity  style={styles.button}
          onPress={() => navigation.navigate('AddActivity')}>
       <ImageBackground source={require('../../../assets/Añadir.png')} style={{flex:1}}>
          <Text style={styles.text}>Añadir Actividad</Text>
        </ImageBackground>
        </TouchableOpacity> 
      
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Itinerary')}>
        <ImageBackground source={require('../../../assets/Itinerario.png')} style={{flex:1}}>
          <Text style={styles.text}>Mi Itinerario</Text>
        </ImageBackground>
        </TouchableOpacity> 
      </View>
      <IconButton
        icon="exit-to-app"
        color='white'
        size={42}
        onPress= {signout}/>
     </ImageBackground>
    </ScrollView>
  </View>
    );
  }

  export default Home;

  const styles = StyleSheet.create({
  container:{
    padding:-1
  },
  button: {
      width: width * 0.98,
      height: height * 0.24,
      marginHorizontal:3.5,
      top:14,
      margin:1,
  },
  text:{
    fontSize: 25,
    fontFamily:'Marcellus_400Regular',
    textAlign:"center", 
    margin:18,
    color: 'white',
  },
});
