import React from 'react';
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as AuthProvider } from "./src/providers/AuthContext";
import MyStack from './src/components/navegation/Stack';

export default function App() {
  return (
    <AuthProvider>
        <PaperProvider>
          <MyStack/>
        </PaperProvider>
    </AuthProvider>
  );
}

