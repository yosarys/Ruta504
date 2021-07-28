import React, { useContext, useState } from "react";
import { StyleSheet, View, Button,Platform} from "react-native";
import { TextInput, IconButton, Title} from "react-native-paper";
import DateTimePicker from '@react-native-community/datetimepicker';
import Textarea from 'react-native-textarea';
import { Context as ActivityContext } from "../../providers/ActivityContext";
import { Context as AuthContext } from "../../providers/AuthContext";

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

  function handleSave() {
    if (activityTitle && activityDescription && date) {
      createActivity(activityTitle,activityDescription,date,timestamp, state.user.id);
    }
  }

  return (
 <View style={styles.container}>
   <Title style={styles.title}>Añadir Actividad</Title>
      <TextInput
        mode="outlined"
        label= "Titulo"
        color='black'
        autoCapitalize="none"
        value={activityTitle}
        onChangeText={setProjectTitle}    
      />
    <View style={styles.area}>  
      <Textarea  style={styles.text}
        placeholder= "Descripcion"
        numberOfLines= {10}
        maxLength={120}
        value={activityDescription}
        onChangeText={setProjectDescription}
      />
    </View>

 <View style= {{flexDirection:'row',justifyContent:'space-between'}}>
     <View>
      <TextInput style={styles.dateP} 
        mode='outlined'
        editable={false} 
        selectTextOnFocus={false}>{text}
      </TextInput>
    </View>

    <View>
       <IconButton style ={styles.icon}
        icon= "calendar-month" 
        size={60}
        color= '#007dff'
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
          title="Guardar"
          onPress={() => handleSave()}
        />
      </View>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    marginTop:90,
  },
  title:{
    textAlign:'center'
  },
  area:{
    borderRadius:4,
    borderWidth: 1,
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
    backgroundColor: 'transparent',
    width:200
  },
  button:{
    marginTop:10,
  },
  icon:{
    width:'100%',
    marginTop:-5
  }
});

export default CreateProject;
