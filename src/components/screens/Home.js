import React from "react";
import { View,StyleSheet, TouchableOpacity, Text} from 'react-native';


function Home({ navigation }) {

    return (
      <View style={styles.container}> 
      <TouchableOpacity style={styles.button}
         onPress={() => navigation.navigate('Departaments')}>
        <Text style={styles.text}>Lugares Turisticos</Text>
      </TouchableOpacity>

        <TouchableOpacity  style={styles.button}
          onPress={() => navigation.navigate('AddActivity')}>
          <Text style={styles.text}>Añadir Actividad</Text>
        </TouchableOpacity> 

        <TouchableOpacity  style={styles.button}
          onPress={() => navigation.navigate('Itinerary')}>
          <Text style={styles.text}>Mi Itinerario</Text>
        </TouchableOpacity> 

        <TouchableOpacity  style={styles.button}
           onPress= {(console.log)}>
          <Text style={styles.text}>Cerrar Sesion</Text>
        </TouchableOpacity> 

      </View>
    );
  }

  export default Home;

  const styles = StyleSheet.create({
  container:{
    padding:10,
    marginTop: 90,
    marginHorizontal: 90,
  },
  button: {
      width: 280,
      height: 110,
      marginTop: 10,
      backgroundColor:'blue',
      borderRadius: 25,
      borderWidth: 3,
      borderColor: 'grey',
  },
  text:{
    fontSize: 23,
    textAlign:"center", 
    margin:30,
    color: 'white',
  },
});
