import  React,{useEffect,useState} from 'react';
import {firebase} from "../firebase/index";
import "firebase/firestore";
import { View, Text, FlatList,Image, StyleSheet} from 'react-native';

export const DepAtlantida = ({dep}) =>{
  const [place, setPlace] = useState([]);
  useEffect(()=>{
      firebase.firestore().collection("Lugares").where("departamento",'==','Atlantida')
      .get()
      .then((querySnapshot)=>{
        const place=[];
        querySnapshot.forEach((doc)=>{
        const {departamento,imagen,nombre,descripcion}=doc.data()
        place.push(
          {
            id:doc.id,
            departamento,
            imagen,
            nombre,
            descripcion
          }
        )
      })
      setPlace(place)
    })
  },[]);
  
    return (
            <FlatList
            data={place}
            renderItem={({item})=> (
                        <View>
                        <Text>{item.nombre}</Text>
                        <Image style={styles.image}
                            source={{ uri:`${item.imagen}`}}
                        />
                        <Text>Descripción:</Text>
                        <Text>{item.descripcion}</Text>
                   </View>
            )}
           />
    );
}
export const DepColon = ({dep}) =>{
    const [place, setPlace] = useState([]);
    useEffect(()=>{
        firebase.firestore().collection("Lugares").where("departamento",'==','Colón')
        .get()
        .then((querySnapshot)=>{
          const place=[];
          querySnapshot.forEach((doc)=>{
          const {departamento,imagen,nombre,descripcion}=doc.data()
          place.push(
            {
              id:doc.id,
              departamento,
              imagen,
              nombre,
              descripcion
            }
          )
        })
        setPlace(place)
      })
    },[]);
    
      return (
              <FlatList
              data={place}
              renderItem={({item})=> (
                <View>
                <Text>{item.nombre}</Text>
                <Image style={styles.image}
                    source={{ uri:`${item.imagen}`}}
                />
                <Text>Descripción:</Text>
                <Text>{item.descripcion}</Text>
           </View>
              )}
             />
      );
}

export const DepComayagua = ({dep}) =>{
    const [place, setPlace] = useState([]);
    useEffect(()=>{
        firebase.firestore().collection("Lugares").where("departamento",'==','Comayagua')
        .get()
        .then((querySnapshot)=>{
          const place=[];
          querySnapshot.forEach((doc)=>{
          const {departamento,imagen,nombre,descripcion}=doc.data()
          place.push(
            {
              id:doc.id,
              departamento,
              imagen,
              nombre,
              descripcion
            }
          )
        })
        setPlace(place)
      })
    },[]);
    
      return (
              <FlatList
              data={place}
              renderItem={({item})=> (
                <View>
                <Text>{item.nombre}</Text>
                <Image style={styles.image}
                    source={{ uri:`${item.imagen}`}}
                />
                <Text>Descripción:</Text>
                <Text>{item.descripcion}</Text>
           </View>
              )}
             />
      );
}

export const DepCopan = ({dep}) =>{
    const [place, setPlace] = useState([]);
    useEffect(()=>{
        firebase.firestore().collection("Lugares").where("departamento",'==','Copán')
        .get()
        .then((querySnapshot)=>{
          const place=[];
          querySnapshot.forEach((doc)=>{
          const {departamento,imagen,nombre,descripcion}=doc.data()
          place.push(
            {
              id:doc.id,
              departamento,
              imagen,
              nombre,
              descripcion
            }
          )
        })
        setPlace(place)
      })
    },[]);
    
      return (
              <FlatList
              data={place}
              renderItem={({item})=> (
                <View>
                <Text>{item.nombre}</Text>
                <Image style={styles.image}
                    source={{ uri:`${item.imagen}`}}
                />
                <Text>Descripción:</Text>
                <Text>{item.descripcion}</Text>
           </View>
              )}
             />
      );
}

export const DepCortes = ({dep}) =>{
    const [place, setPlace] = useState([]);
    useEffect(()=>{
        firebase.firestore().collection("Lugares").where("departamento",'==','Cortés')
        .get()
        .then((querySnapshot)=>{
          const place=[];
          querySnapshot.forEach((doc)=>{
          const {departamento,imagen,nombre,descripcion}=doc.data()
          place.push(
            {
              id:doc.id,
              departamento,
              imagen,
              nombre,
              descripcion
            }
          )
        })
        setPlace(place)
      })
    },[]);
    
      return (
              <FlatList
              data={place}
              renderItem={({item})=> (
                <View>
                <Text>{item.nombre}</Text>
                <Image style={styles.image}
                    source={{ uri:`${item.imagen}`}}
                />
                <Text>Descripción:</Text>
                <Text>{item.descripcion}</Text>
           </View>
              )}
             />
      );
}
export const DepCholuteca = ({dep}) =>{
    const [place, setPlace] = useState([]);
    useEffect(()=>{
        firebase.firestore().collection("Lugares").where("departamento",'==','Choluteca')
        .get()
        .then((querySnapshot)=>{
          const place=[];
          querySnapshot.forEach((doc)=>{
          const {departamento,imagen,nombre,descripcion}=doc.data()
          place.push(
            {
              id:doc.id,
              departamento,
              imagen,
              nombre,
              descripcion
            }
          )
        })
        setPlace(place)
      })
    },[]);
    
      return (
              <FlatList
              data={place}
              renderItem={({item})=> (
                <View>
                <Text>{item.nombre}</Text>
                <Image style={styles.image}
                    source={{ uri:`${item.imagen}`}}
                />
                <Text>Descripción:</Text>
                <Text>{item.descripcion}</Text>
           </View>
              )}
             />
      );
}
export const DepParaiso = ({dep}) =>{
    const [place, setPlace] = useState([]);
    useEffect(()=>{
        firebase.firestore().collection("Lugares").where("departamento",'==','El Paraiso')
        .get()
        .then((querySnapshot)=>{
          const place=[];
          querySnapshot.forEach((doc)=>{
          const {departamento,imagen,nombre,descripcion}=doc.data()
          place.push(
            {
              id:doc.id,
              departamento,
              imagen,
              nombre,
              descripcion
            }
          )
        })
        setPlace(place)
      })
    },[]);
    
      return (
              <FlatList
              data={place}
              renderItem={({item})=> (
                <View>
                <Text>{item.nombre}</Text>
                <Image style={styles.image}
                    source={{ uri:`${item.imagen}`}}
                />
                <Text>Descripción:</Text>
                <Text>{item.descripcion}</Text>
           </View>
              )}
             />
      );
}
export const DepFrancisco = ({dep}) =>{
    const [place, setPlace] = useState([]);
    useEffect(()=>{
        firebase.firestore().collection("Lugares").where("departamento",'==','Francisco Morazán')
        .get()
        .then((querySnapshot)=>{
          const place=[];
          querySnapshot.forEach((doc)=>{
          const {departamento,imagen,nombre,descripcion}=doc.data()
          place.push(
            {
              id:doc.id,
              departamento,
              imagen,
              nombre,
              descripcion
            }
          )
        })
        setPlace(place)
      })
    },[]);
    
      return (
              <FlatList
              data={place}
              renderItem={({item})=> (
                <View>
                <Text>{item.nombre}</Text>
                <Image style={styles.image}
                    source={{ uri:`${item.imagen}`}}
                />
                <Text>Descripción:</Text>
                <Text>{item.descripcion}</Text>
           </View>
              )}
             />
      );
}
export const DepGracias = ({dep}) =>{
    const [place, setPlace] = useState([]);
    useEffect(()=>{
        firebase.firestore().collection("Lugares").where("departamento",'==','Gracias a Dios')
        .get()
        .then((querySnapshot)=>{
          const place=[];
          querySnapshot.forEach((doc)=>{
          const {departamento,imagen,nombre,descripcion}=doc.data()
          place.push(
            {
              id:doc.id,
              departamento,
              imagen,
              nombre,
              descripcion
            }
          )
        })
        setPlace(place)
      })
    },[]);
    
      return (
              <FlatList
              data={place}
              renderItem={({item})=> (
                <View>
                <Text>{item.nombre}</Text>
                <Image style={styles.image}
                    source={{ uri:`${item.imagen}`}}
                />
                <Text>Descripción:</Text>
                <Text>{item.descripcion}</Text>
           </View>
              )}
             />
      );
}

export const DepIntibuca = ({dep}) =>{
    const [place, setPlace] = useState([]);
    useEffect(()=>{
        firebase.firestore().collection("Lugares").where("departamento",'==','Intibuca')
        .get()
        .then((querySnapshot)=>{
          const place=[];
          querySnapshot.forEach((doc)=>{
          const {departamento,imagen,nombre,descripcion}=doc.data()
          place.push(
            {
              id:doc.id,
              departamento,
              imagen,
              nombre,
              descripcion
            }
          )
        })
        setPlace(place)
      })
    },[]);
    
      return (
              <FlatList
              data={place}
              renderItem={({item})=> (
                <View>
                <Text>{item.nombre}</Text>
                <Image style={styles.image}
                    source={{ uri:`${item.imagen}`}}
                />
                <Text>Descripción:</Text>
                <Text>{item.descripcion}</Text>
           </View>
              )}
             />
      );
}
export const DepIslas = ({dep}) =>{
    const [place, setPlace] = useState([]);
    useEffect(()=>{
        firebase.firestore().collection("Lugares").where("departamento",'==','Islas de la Bahia')
        .get()
        .then((querySnapshot)=>{
          const place=[];
          querySnapshot.forEach((doc)=>{
          const {departamento,imagen,nombre,descripcion}=doc.data()
          place.push(
            {
              id:doc.id,
              departamento,
              imagen,
              nombre,
              descripcion
            }
          )
        })
        setPlace(place)
      })
    },[]);
    
      return (
              <FlatList
              data={place}
              renderItem={({item})=> (
                <View>
                <Text>{item.nombre}</Text>
                <Image style={styles.image}
                    source={{ uri:`${item.imagen}`}}
                />
                <Text>Descripción:</Text>
                <Text>{item.descripcion}</Text>
           </View>
              )}
             />
      );
}    
export const DepPaz = ({dep}) =>{
    const [place, setPlace] = useState([]);
    useEffect(()=>{
        firebase.firestore().collection("Lugares").where("departamento",'==','La Paz')
        .get()
        .then((querySnapshot)=>{
          const place=[];
          querySnapshot.forEach((doc)=>{
          const {departamento,imagen,nombre,descripcion}=doc.data()
          place.push(
            {
              id:doc.id,
              departamento,
              imagen,
              nombre,
              descripcion
            }
          )
        })
        setPlace(place)
      })
    },[]);
    
      return (
              <FlatList
              data={place}
              renderItem={({item})=> (
                <View>
                <Text>{item.nombre}</Text>
                <Image style={styles.image}
                    source={{ uri:`${item.imagen}`}}
                />
                <Text>Descripción:</Text>
                <Text>{item.descripcion}</Text>
           </View>
              )}
             />
      );
}
export const DepLempira = ({dep}) =>{
    const [place, setPlace] = useState([]);
    useEffect(()=>{
        firebase.firestore().collection("Lugares").where("departamento",'==','Lempira')
        .get()
        .then((querySnapshot)=>{
          const place=[];
          querySnapshot.forEach((doc)=>{
          const {departamento,imagen,nombre,descripcion}=doc.data()
          place.push(
            {
              id:doc.id,
              departamento,
              imagen,
              nombre,
              descripcion
            }
          )
        })
        setPlace(place)
      })
    },[]);
    
      return (
              <FlatList
              data={place}
              renderItem={({item})=> (
                <View>
                <Text>{item.nombre}</Text>
                <Image style={styles.image}
                    source={{ uri:`${item.imagen}`}}
                />
                <Text>Descripción:</Text>
                <Text>{item.descripcion}</Text>
           </View>
              )}
             />
      );
    }
 
 export const DepOcotepeque = ({dep}) =>{
        const [place, setPlace] = useState([]);
        useEffect(()=>{
            firebase.firestore().collection("Lugares").where("departamento",'==','Ocotepeque')
            .get()
            .then((querySnapshot)=>{
              const place=[];
              querySnapshot.forEach((doc)=>{
              const {departamento,imagen,nombre,descripcion}=doc.data()
              place.push(
                {
                  id:doc.id,
                  departamento,
                  imagen,
                  nombre,
                  descripcion
                }
              )
            })
            setPlace(place)
          })
        },[]);
        
          return (
                  <FlatList
                  data={place}
                  renderItem={({item})=> (
                    <View>
                    <Text>{item.nombre}</Text>
                    <Image style={styles.image}
                        source={{ uri:`${item.imagen}`}}
                    />
                    <Text>Descripción:</Text>
                    <Text>{item.descripcion}</Text>
               </View>
                  )}
                 />
          );
}   
export const DepOlancho = ({dep}) =>{
    const [place, setPlace] = useState([]);
    useEffect(()=>{
        firebase.firestore().collection("Lugares").where("departamento",'==','Olancho')
        .get()
        .then((querySnapshot)=>{
          const place=[];
          querySnapshot.forEach((doc)=>{
          const {departamento,imagen,nombre,descripcion}=doc.data()
          place.push(
            {
              id:doc.id,
              departamento,
              imagen,
              nombre,
              descripcion
            }
          )
        })
        setPlace(place)
      })
    },[]);
    
      return (
              <FlatList
              data={place}
              renderItem={({item})=> (
                <View>
                <Text>{item.nombre}</Text>
                <Image style={styles.image}
                    source={{ uri:`${item.imagen}`}}
                />
                <Text>Descripción:</Text>
                <Text>{item.descripcion}</Text>
           </View>
              )}
             />
      );
    }
 export const DepSantaBarbara = ({dep}) =>{
    const [place, setPlace] = useState([]);
    useEffect(()=>{
        firebase.firestore().collection("Lugares").where("departamento",'==','Santa Barbara')
        .get()
        .then((querySnapshot)=>{
          const place=[];
          querySnapshot.forEach((doc)=>{
          const {departamento,imagen,nombre,descripcion}=doc.data()
          place.push(
            {
              id:doc.id,
              departamento,
              imagen,
              nombre,
              descripcion
            }
          )
        })
        setPlace(place)
      })
    },[]);
    
      return (
              <FlatList
              data={place}
              renderItem={({item})=> (
                <View>
                <Text>{item.nombre}</Text>
                <Image style={styles.image}
                    source={{ uri:`${item.imagen}`}}
                />
                <Text>Descripción:</Text>
                <Text>{item.descripcion}</Text>
           </View>
              )}
             />
      );
}

export const DepValle = ({dep}) =>{
    const [place, setPlace] = useState([]);
    useEffect(()=>{
        firebase.firestore().collection("Lugares").where("departamento",'==','Valle')
        .get()
        .then((querySnapshot)=>{
          const place=[];
          querySnapshot.forEach((doc)=>{
          const {departamento,imagen,nombre,descripcion}=doc.data()
          place.push(
            {
              id:doc.id,
              departamento,
              imagen,
              nombre,
              descripcion
            }
          )
        })
        setPlace(place)
      })
    },[]);
    
      return (
              <FlatList
              data={place}
              renderItem={({item})=> (
                <View>
                <Text>{item.nombre}</Text>
                <Image style={styles.image}
                    source={{ uri:`${item.imagen}`}}
                />
                <Text>Descripción:</Text>
                <Text>{item.descripcion}</Text>
           </View>
              )}
             />
      );
}

export const DepYoro = ({dep}) =>{
    const [place, setPlace] = useState([]);
    useEffect(()=>{
        firebase.firestore().collection("Lugares").where("departamento",'==','Yoro')
        .get()
        .then((querySnapshot)=>{
          const place=[];
          querySnapshot.forEach((doc)=>{
          const {departamento,imagen,nombre,descripcion}=doc.data()
          place.push(
            {
              id:doc.id,
              departamento,
              imagen,
              nombre,
              descripcion
            }
          )
        })
        setPlace(place)
      })
    },[]);
    
      return (
              <FlatList
              data={place}
              renderItem={({item})=> (
                <View>
                <Text>{item.nombre}</Text>
                <Image style={styles.image}
                    source={{ uri:`${item.imagen}`}}
                />
                <Text>Descripción:</Text>
                <Text>{item.descripcion}</Text>
           </View>
              )}
             />
      );
    }

const styles = StyleSheet.create({
  image:{
    resizeMode: 'stretch',
    width: 300,
    height: 250,
  }
})