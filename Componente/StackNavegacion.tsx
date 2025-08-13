import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottonTabNavegacion from './BottonTabNavegacion';
import Buscador from '../Pages/Buscador';

export type RootStackParamList = {
  Main: undefined;
  Buscador: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavegacion() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottonTabNavegacion}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Buscador" component={Buscador} />
    </Stack.Navigator>
  );
}

