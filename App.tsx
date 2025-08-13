import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ProviderTarea } from './Providers/ProviderTarea';
import StackNavegacion from './Componente/StackNavegacion';

export default function App() {
  return (
    <ProviderTarea>
      <NavigationContainer>
        <StackNavegacion />
      </NavigationContainer>
    </ProviderTarea>
  );
}
