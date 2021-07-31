import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, Image,View} from "react-native";
import Places from "./Places";

const DATA = [
  {
    id: "1",
    title: "Atlantida",
    img: "https://www.hondurastips.hn/wp-content/uploads/2011/02/Muelle-Reinaldo-Canales.jpg",
  },
  {
    id: "2",
    title: "Colón",
    img: "https://www.laprensa.hn/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=zpCMFIJwXkEWNKRHibxoS8$daE2N3K4ZzOUsqbU5sYsBTN_GjKNqgSbWv6tgB9bbWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg",
  },
  {
    id: "3",
    title: "Comayagua",
    img: "https://www.hondurastips.hn/wp-content/uploads/2018/03/la-soledad-5-768x511.jpg",
  },
  {
    id:"4",
    title:"Copán",
    img: "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_650x650/public/imprescindibles_images/Honduras_Copan_shutterstock_629516945_James%20Dugan_Chutterstock.jpg?itok=4dSnP7ei",
  },
  {
    id:"5",
    title:"Cortés",
    img: "https://www.laprensa.hn/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=W2SS_irRZhieysExxjldTs$daE2N3K4ZzOUsqbU5sYu35FPFHjNx3d569nVvvnts6FB40xiOfUoExWL3M40tfzssyZqpeG_J0TFo7ZhRaDiHC9oxmioMlYVJD0A$3RbIiibgT65kY_CSDiCiUzvHvODrHApbd6ry6YGl5GGOZrs-&CONTENTTYPE=image/jpeg",
  },
  {
    id:"6",
    title:"Choluteca",
    img: "https://www.hondurastips.hn/wp-content/uploads/2012/02/Playa-de-Cede%C3%B1o-web.jpg",
  },
  {
    id:"7",
    title:"El Paraíso",
    img: "https://www.hondurastips.hn/wp-content/uploads/2012/02/00-1-768x465.jpg",
  },
  {
    id:"8",
    title:"Francisco Morazán",
    img: "https://photo620x400.mnstatic.com/4913c5475ee8ea3baf6a52af4a66c282/parque-nacional-la-tigra.jpg",
  },
  {
    id:"9",
    title:"Gracias a Dios",
    img: "https://i.pinimg.com/originals/39/86/fe/3986fe11e01f1b79d3cca07bc6a0f1f1.jpg",
  },
  {
    id:"10",
    title:"Intibuca",
    img: "https://www.laprensa.hn/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=OCXjpkZY0OSUJixzRLNyY8$daE2N3K4ZzOUsqbU5sYscUKO4AYGOWFrZSg1h9EHv6FB40xiOfUoExWL3M40tfzssyZqpeG_J0TFo7ZhRaDiHC9oxmioMlYVJD0A$3RbIiibgT65kY_CSDiCiUzvHvODrHApbd6ry6YGl5GGOZrs-&CONTENTTYPE=image/jpeg",
  },
  {
    id:"11",
    title:"Islas de la Bahia",
    img: "https://hotspotsmagazine.com/wp-content/uploads/2019/06/3424_Conexiones-Roatan-Honduras.jpg",
  },
  {
    id:"12",
    title:"La Paz",
    img: "https://www.ecured.cu/images/7/7f/CuevaGigante.jpg",
  },
  {
    id:"13",
    title:"Lempira",
    img: "https://www.hondurastips.hn/wp-content/uploads/2012/02/4-2.jpg",
  },
  {
    id:"14",
    title:"Ocotepeque",
    img: "https://www.hondurastips.hn/wp-content/uploads/2012/10/LOGO-cayaguanca1.jpg",
  },
  {
    id:"15",
    title:"Olancho",
    img:"https://www.hondurastips.hn/wp-content/uploads/2019/02/cuevas-talgua-13.jpg",
  },
  {
    id:"16",
    title:"Santa Bárbara",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/17/SBBotanicGarden1.jpg",
  },
  {
    id:"17",
    title:"Valle",
    img: "https://www.elcolochoviajero.com/wp-content/uploads/2019/09/800px-Puerto_de_amapala_Honduras.jpg",
  },
  {
    id:"18",
    title:"Yoro",
    img: "https://www.laprensa.hn/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=UWuKlaYlhTcveLH$u5ykq8$daE2N3K4ZzOUsqbU5sYutGsUMNJZXZYEc3rmBndV16FB40xiOfUoExWL3M40tfzssyZqpeG_J0TFo7ZhRaDiHC9oxmioMlYVJD0A$3RbIiibgT65kY_CSDiCiUzvHvODrHApbd6ry6YGl5GGOZrs-&CONTENTTYPE=image/jpeg",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View>
    <Image style ={styles.img} source = {{uri:`${item.img}`}} />
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    </View>
  </TouchableOpacity>
);

export const Departaments = ({navigation}) => {
  const [selectedId] = useState();

  const renderItem = ({ item}) => {
    const backgroundColor = item.id === selectedId ? "#fdfefe" : "#fdfefe";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('Places',{departamento:item.title})}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView>
           <FlatList
            data={DATA}
            numColumns = { "2" }
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
             />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 1,
    paddingVertical: 1,
    marginVertical: 7,
    marginHorizontal: 17,
    marginTop: 10,
    borderWidth: 2, 
    borderRadius: 9,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  img:{
     width: 200,
     height: 180, 
     borderRadius:7
  }
});
