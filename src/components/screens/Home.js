import React, { useContext, useState} from "react";
import { View,StyleSheet, TouchableOpacity,SafeAreaView} from 'react-native';
import {Modal,Portal, IconButton,Text} from 'react-native-paper';
import { Context as AuthContext } from "../../providers/AuthContext";

function Home({ navigation }) {
const { signout } = useContext(AuthContext);
const [modal, setModal] = useState(false); 

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
           onPress= {signout}>
          <Text style={styles.text}>Cerrar Sesion</Text>
        </TouchableOpacity> 

        <IconButton
        icon="cog"
        color='blue'
        size={30}
        onPress={() => setModal(true)}/>

      <Portal>
        <Modal visible={modal} style={styles.modal}>
            <SafeAreaView>
              <IconButton 
                icon="close"
                size={25}
                onPress={() => setModal(false)}/>
              <View>
                <Text>
                  Ruta504
                </Text>
              </View>
            </SafeAreaView>
          </Modal>
      </Portal>

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
  modal: {
    margin: 20,
    marginTop:1,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
});
