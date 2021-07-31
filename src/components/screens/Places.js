import React from "react";
import { View} from 'react-native';
import { DepAtlantida,DepCholuteca,DepColon,DepComayagua,DepCopan,DepCortes, DepFrancisco, DepGracias, DepIntibuca, DepIslas, DepLempira, DepOcotepeque, DepOlancho, DepParaiso, DepPaz, DepSantaBarbara, DepValle, DepYoro } from "../../firebase/consultas";

const ciudad = ({route})=>{
const {departamento}=route.params;
    if(departamento == 'Atlantida'){
      return (
            <View>
                  <DepAtlantida dep={departamento}/>
            </View>
        );
    }
    if(departamento == 'Colón'){
      return (
            <View>
                  <DepColon dep={departamento}/>
            </View>
        );
    }
    if(departamento == 'Comayagua'){
      return (
            <View>
                  <DepComayagua dep={departamento}/>
            </View>
        );
    }
    if(departamento=='Copán'){
      return (
            <View>
                  <DepCopan dep={departamento}/>
            </View>
        );
    }
    if(departamento=='Cortés'){
      return (
            <View>
                  <DepCortes dep={departamento}/>
            </View>
        );
    }

    if(departamento == 'Choluteca'){
      return (
            <View>
                  <DepCholuteca dep={departamento}/>
            </View>
        );
    }
    if(departamento == 'El Paraiso'){
      return (
            <View>
                  <DepParaiso dep={departamento}/>
            </View>
        );
    }
    if(departamento == 'Francisco Morazán'){
      return (
            <View>
                  <DepFrancisco dep={departamento}/>
            </View>
        );
    }
    if(departamento == 'Gracias a Dios'){
      return (
            <View>
                  <DepGracias dep={departamento}/>
            </View>
        );
    }
    if(departamento == 'Intibuca'){
      return (
            <View>
                  <DepIntibuca dep={departamento}/>              
            </View>
        );
    }
    if(departamento == 'Islas de la Bahia'){
      return (
            <View>
                  <DepIslas dep={departamento}/>              
            </View>
        );
    }
    if(departamento == 'La Paz'){
      return (
            <View>
                  <DepPaz dep={departamento}/>              
            </View>
        );
    }
    if(departamento == 'Lempira'){
      return (
            <View>
                  <DepLempira dep={departamento}/>              
            </View>
        );
    }
    if(departamento == 'Ocotepeque'){
      return (
            <View>
                  <DepOcotepeque dep={departamento}/>              
            </View>
        );
    }
    if(departamento == 'Olancho'){
      return (
            <View>
                  <DepOlancho dep={departamento}/>              
            </View>
        );
    }
    if(departamento == 'Santa Barbara'){
      return (
            <View>
                  <DepSantaBarbara dep={departamento}/>              
            </View>
        );
    }
    if(departamento == 'Valle'){
      return (
            <View>
                  <DepValle dep={departamento}/>              
            </View>
        );
    }
    if(departamento == 'Yoro'){
      return (
            <View>
                  <DepYoro dep={departamento}/>              
            </View>
        );
    }
}
  export default ciudad;