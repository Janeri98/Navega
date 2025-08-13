import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import AddTodo from '../Pages/AddTodo';

const Tab = createBottomTabNavigator();

export default function BottonTabNavegacion() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AgregarTareas" component={AddTodo} />
    </Tab.Navigator>
  );
}

