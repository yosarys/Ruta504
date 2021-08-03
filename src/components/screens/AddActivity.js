import React, { useContext, useState } from "react";
import { StyleSheet, View,Platform, ScrollView, ImageBackground} from "react-native";
import { TextInput, IconButton, Title,Button, Caption,Text} from "react-native-paper";
import DateTimePicker from '@react-native-community/datetimepicker';
import Textarea from 'react-native-textarea';
import { Context as ActivityContext } from "../../providers/ActivityContext";
import { Context as AuthContext } from "../../providers/AuthContext";
import theme from "../../theme";

function CreateProject() {
  const { createActivity } = useContext(ActivityContext);
  const { state } = useContext(AuthContext);
  const [activityTitle,setProjectTitle] = useState("");
  const [activityDescription,setProjectDescription] = useState("");
  const [timestamp, setTimestamp] = useState(Date.now());
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Fecha')
  const [activityTitleError, setactivityTitleError] = useState(false);
  const [activityDescriptionError, setactivityDescriptionError] = useState(false);
  const [activitydateError, setadateError] = useState(false);
  const [error, setError] = useState(false);

  /*Utilización de DateTimePicker dandole un formato a la fecha y redirigiendo la funcion a un IconButton*/
  /*https://github.com/react-native-datetimepicker/datetimepicker*/
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setText(fDate)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  function handleSave(input) {
    if (input === "Titulo") {
      if (!activityTitle) setactivityTitleError(true);
      else setactivityTitleError(false);
    } else if (input === "Descripción") {
      if (!activityDescription) setactivityDescriptionError(true);
      else setactivityDescriptionError(false);
    } else if (input === "Fecha") {
      if (!date) setadateError(true);
      else setadateError(false);
    }  else if (input === "Guardar") {
      if (
        activityTitle &&
        activityDescription &&
        date &&
        !activityTitleError&&
        !activityDescriptionError &&
        !activitydateError
      ) {
        try {
          createActivity(activityTitle, activityDescription,date,timestamp, state.user.id);
        } catch (error) {
          console.log(error);
        }
      } else setError("Ingrese todos los campos");
    }
  }

  return (
<ImageBackground source= {require('../../../assets/agregar.jpg')} style={{flex: 1}}>
  <ScrollView>
  {error && <Text>{error}</Text>}
      {state.errorMessage != null && <Text>{state.errorMessage}</Text>}
   <View style={styles.container}>
    <Title style={styles.title}>Añadir Actividad</Title>
    <View>
      <TextInput style={styles.input}
        mode="flat"
        placeholder= "Titulo"
        color='black'
        autoCapitalize="none"
        value={activityTitle}
        onChangeText={setProjectTitle}  
        onBlur={() => handleSave("Titulo")}  
       />
        {activityTitleError && <Caption style={styles.caption}>Por favor, ingresa un titulo</Caption>}
      </View>

    <View style={styles.area}>  
      <Textarea  style={styles.text}
        placeholder= "Descripción"
        numberOfLines= {10}
        maxLength={120}
        value={activityDescription}
        onChangeText={setProjectDescription}
        onBlur={() => handleSave("Descripcion")}
      />
      {activityDescriptionError && <Caption style={styles.caption}>Por favor, ingrese una descripción</Caption>}
    </View>

 <View style= {{flexDirection:'row',justifyContent:'space-between'}}>
     <View>
      <TextInput style={styles.dateP} 
        mode='outlined'
        outlineColor='gray'
        editable={false} 
        selectTextOnFocus={false}>{text}
      </TextInput>
      {activitydateError && <Caption style={styles.caption}>Por favor seleccione una fecha</Caption>}
    </View>

    <View>
       <IconButton style ={styles.icon}
        icon= "calendar-month" 
        size={55}
        color= '#00cce9'
        onPress={() => showMode('date')}
       />
    </View>
  </View>
      {show && (
          <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          onChange={onChange} 
          />
      )}
       <View style={styles.button}>
        <Button 
          onPress={() => {(handleSave("Guardar"),alert("Actividad guardada exitosamente"))}}
          color='white'>
          Guardar
        </Button>
      </View>
  </View>
 </ScrollView>
</ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    marginTop:90,
  },
  title:{
    textAlign:'center',
    fontSize:30,
    top:-20,
    fontFamily:'Marcellus_400Regular'
  },
  area:{
    borderRadius:4,
    borderWidth: 1,
    backgroundColor:'white',
    borderColor: 'grey',
    marginTop: 10,
    padding: 10,
  },
  text:{
    color: 'black',
    fontSize: 15,
  },
  dateP:{
    marginTop: 5,
    backgroundColor: 'white',
    width:200,
    height:45
  },
  button:{
    marginTop:10,
    backgroundColor:'#00cce9',
    borderRadius:20,
  },
  icon:{
    width:'100%',
    marginTop:-5
  },
  input:{
    flex:1,
    height:30,
    padding:10,
    marginHorizontal:5,
    marginVertical:10,
    backgroundColor:theme.colors.white,
  },
  caption:{
    color:theme.colors.black,
    marginHorizontal:35
  },
});

export default CreateProject;
