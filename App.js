import React from 'react';
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as AuthProvider } from "./src/providers/AuthContext";
import { Provider as ActivityContext} from './src/providers/ActivityContext';
import LongTimers from "./src/utils/LongTimer"
import MyStack from './src/components/navegation/Stack';

import {LogBox } from 'react-native';
import _ from 'lodash';

LogBox.ignoreLogs(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};


export default function App() {
  LongTimers();
  return (
   <ActivityContext>
       <AuthProvider>
          <PaperProvider>
             <MyStack/>
          </PaperProvider>
       </AuthProvider>
   </ActivityContext>
  );
}

