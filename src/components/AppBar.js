import React,{useState} from 'react';
import { Appbar, Portal,Modal} from 'react-native-paper';
import { StyleSheet,StatusBar,SafeAreaView,View,Text,Dimensions} from 'react-native';
import { IconButton } from 'react-native-paper';
import theme from '../theme';

const { height, width } = Dimensions.get("screen");
const Header = () => {
const [modal, setModal] = useState(false); 
  return (
    <Appbar.Header style={styles.header}> 
      <StatusBar></StatusBar>
      <Text style={styles.text}>Ruta504</Text>
      <IconButton style={styles.icon}
        icon="cog"
        color='white'
        size={30}
        onPress={() => setModal(true)}/>
      <Portal>
       <Modal visible={modal} style={styles.modal}>
        <SafeAreaView>
            <View style={{marginBottom:5}}>
              <IconButton
                icon="close"
                color='red'
                size={25}
                onPress={() => setModal(false)}/>
            </View>
              <View style={{marginBottom:60, padding:10}}>
                <Text style={{fontFamily:'Marcellus_400Regular',textAlign:'center',fontSize:20}}>
                  Ruta504
                </Text>
                <Text style={{fontFamily:'Marcellus_400Regular',marginTop:10, fontSize:15, textAlign:'justify'}}>Es una aplicación desarrollada para personas amantes de viajes, donde encontraras muchos
                      de los lugares más populares de Honduras, ademas podrás almacenar tu información para planear tus actividades de turista.
                </Text>
                <Text style={{marginTop:10, fontSize:10, fontWeight:'bold', textAlign:'center'}}>By Yosary Santos y Jennyfer Herrera</Text>
                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center'}}> ⓒ 2021</Text>
              </View>
         </SafeAreaView>
       </Modal>
      </Portal>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header:{
    height:30,
    backgroundColor: theme.colors.turquoise,
  },
  text:{
    flex:1,
    fontSize:20,
    fontFamily:'Marcellus_400Regular',
    marginBottom:25,
    color:theme.colors.white
  },
  icon:{
    justifyContent:'space-between',
    marginBottom:15,
  },
  modal: {
    width: width * 0.7,
    height: height * 0.45,
    marginTop:'45%',
    margin:'15%',
    backgroundColor: "white",
    opacity:0.70,
    borderRadius: 20,
    alignItems: "center",
  },
})

export default Header;
