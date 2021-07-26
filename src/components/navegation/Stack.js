import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../screens/Home";
import {Departaments} from '../screens/Departaments';
import AddActivity from '../screens/AddActivity';
import Itinerary from '../screens/Itinerary';
import Places from '../screens/Places';


const Stack = createStackNavigator();

function MyStack() {

    return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title:"Ruta504"}}/>
        <Stack.Screen name="Departaments" component={Departaments} options= {{title:"Departamentos"}}/>
        <Stack.Screen name="AddActivity" component={AddActivity} options= {{title:"Actividad"}}/>
        <Stack.Screen name="Itinerary" component={Itinerary} options= {{title:"Mi Itinerario"}}/>
        <Stack.Screen name="Places" component={Places} options= {{title:"Lugares Turisticos"}}/>
      </Stack.Navigator>
   </NavigationContainer>
   ) 
}
  export default MyStack;