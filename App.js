import React from 'react';
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as AuthProvider } from "./src/providers/AuthContext";
import { Provider as ActivityContext} from './src/providers/ActivityContext';
import theme from "./src/theme";
import LongTimers from "./src/utils/LongTimer"
import MyStack from './src/components/navegation/Stack';
import {LogBox } from 'react-native';
import _ from 'lodash';
import {useFonts as useSail,Sail_400Regular} from '@expo-google-fonts/sail';
import {useFonts as useMarcellus,Marcellus_400Regular} from '@expo-google-fonts/marcellus';
import {useFonts as useParisienne,Parisienne_400Regular} from '@expo-google-fonts/parisienne';

LogBox.ignoreLogs(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
     console.warn(message);
  }
};

/*Aplicación de fuentes de letras a la App, donde se intalan las fuentes como paquetes*/
/*https://github.com/expo/google-fonts*/
export default function App() {
  LongTimers();
  const [parisienneLoaded] = useParisienne({
    Parisienne_400Regular,
  });
  const [sailLoaded] = useSail({
    Sail_400Regular,
  });
  const [marcellusLoaded] = useMarcellus({
    Marcellus_400Regular,
  });

  if(!sailLoaded || !marcellusLoaded || !parisienneLoaded){
      return null
  }

  return (
   <ActivityContext>
       <AuthProvider>
          <PaperProvider theme={theme}>
             <MyStack/>
          </PaperProvider>
       </AuthProvider>
   </ActivityContext>
  );
}

