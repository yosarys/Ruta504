import React, { useContext, useEffect } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Context as AuthContext } from "../../providers/AuthContext";
import Home from "../screens/Home";
import {Departaments} from '../screens/Departaments';
import AddActivity from '../screens/AddActivity';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import ItineraryScreen from '../screens/ItineraryScreen';
import Places from '../screens/Places';
import { IconButton } from "react-native-paper";

const Stack = createStackNavigator();

function MyStack() {
const { state, persistLogin } = useContext(AuthContext);

useEffect(() => {
  persistLogin();
}, []);

    return (
   <NavigationContainer>
     {!state.loading && (
     <>
      {state.loggedIn ? (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options= {{headerShown:false}}/> 
        <Stack.Screen name="Departaments" component={Departaments} options= {{title:"Departamentos"}}/>
        <Stack.Screen name="AddActivity" component={AddActivity} options= {{title:"Actividad"}}/>
        <Stack.Screen name="Itinerary" component={ItineraryScreen} options= {{title:"Mi Itinerario"}}/>
        <Stack.Screen name="Places" component={Places} options= {{title:"Lugares Turisticos"}}/>
      </Stack.Navigator>
       ) : (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
       )}
     </>
    )}
   </NavigationContainer>
   ); 
}
  export default MyStack;