import React from "react";
import { View, ImageBackground} from 'react-native';
import { DepAtlantida,DepCholuteca,DepColon,DepComayagua,DepCopan,DepCortes, DepFrancisco, DepGracias, DepIntibuca, DepIslas, DepLempira, DepOcotepeque, DepOlancho, DepParaiso, DepPaz, DepSantaBarbara, DepValle, DepYoro } from "../../firebase/consultas";

const ciudad = ({route})=>{
const {departamento}=route.params;
    if(departamento == 'Atlantida'){
      return (
            <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
                <View>
                    <DepAtlantida dep={departamento}/>
                </View>
            </ImageBackground>
        );
    }
    if(departamento == 'Colón'){
      return (
            <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
            <View>
                  <DepColon dep={departamento}/>
            </View>
            </ImageBackground>
        );
    }
    if(departamento == 'Comayagua'){
      return (
            <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
            <View>
                  <DepComayagua dep={departamento}/>
            </View>
            </ImageBackground>
        );
    }
    if(departamento=='Copán'){
      return (
            <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
            <View>
                  <DepCopan dep={departamento}/>
            </View>
            </ImageBackground>
        );
    }
    if(departamento=='Cortés'){
      return (
            <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
            <View>
                  <DepCortes dep={departamento}/>
            </View>
            </ImageBackground>
        );
    }

    if(departamento == 'Choluteca'){
      return (
            <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
            <View>
                  <DepCholuteca dep={departamento}/>
            </View>
            </ImageBackground>
        );
    }
    if(departamento == 'El Paraiso'){
      return (
            <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
            <View>
                  <DepParaiso dep={departamento}/>
            </View>
            </ImageBackground>
        );
    }
    if(departamento == 'Francisco Morazán'){
      return (
            <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
            <View>
                  <DepFrancisco dep={departamento}/>
            </View>
            </ImageBackground>
        );
    }
    if(departamento == 'Gracias a Dios'){
      return (
            <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
            <View>
                  <DepGracias dep={departamento}/>
            </View>
            </ImageBackground>
        );
    }
    if(departamento == 'Intibuca'){
      return (
            <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
            <View>
                  <DepIntibuca dep={departamento}/>              
            </View>
            </ImageBackground>
        );
    }
    if(departamento == 'Islas de la Bahia'){
      return (
            <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
            <View>
                  <DepIslas dep={departamento}/>              
            </View>
            </ImageBackground>
        );
    }
    if(departamento == 'La Paz'){
      return (
            <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
            <View>
                  <DepPaz dep={departamento}/>              
            </View>
            </ImageBackground>
        );
    }
    if(departamento == 'Lempira'){
      return (
            <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
            <View>
                  <DepLempira dep={departamento}/>              
            </View>
            </ImageBackground>
        );
    }
    if(departamento == 'Ocotepeque'){
      return (
            <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
            <View>
                  <DepOcotepeque dep={departamento}/>              
            </View>
            </ImageBackground>
        );
    }
    if(departamento == 'Olancho'){
      return (
            <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
            <View>
                  <DepOlancho dep={departamento}/>              
            </View>
            </ImageBackground>
        );
    }
    if(departamento == 'Santa Barbara'){
      return (
            <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
            <View>
                  <DepSantaBarbara dep={departamento}/>              
            </View>
            </ImageBackground>
        );
    }
    if(departamento == 'Valle'){
      return (
            <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
            <View>
                  <DepValle dep={departamento}/>              
            </View>
            </ImageBackground>
        );
    }
    if(departamento == 'Yoro'){
      return (
            <ImageBackground source={require('../../../assets/home.jpg')} style={{flex:1}}>
            <View>
                  <DepYoro dep={departamento}/>              
            </View>
            </ImageBackground>
        );
    }
}
  export default ciudad;