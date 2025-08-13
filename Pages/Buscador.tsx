import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { TareaContext } from '../Contex/TareaContext';
import { RouteProp } from '@react-navigation/native';

type BuscadorRouteParams = {
  Buscador: { id: number };
};

type Props = {
  route: RouteProp<BuscadorRouteParams, 'Buscador'>;
};

export default function Buscador({ route }: Props) {
  const { id } = route.params;
  const { getTodoById } = useContext(TareaContext);

  const tarea = getTodoById(id);

  if (!tarea) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No se encuentra la tarea</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Detalle de la tarea</Text>
      <Text>ID: {tarea.id}</Text>
      <Text>Texto: {tarea.texto}</Text>
    </View>
  );
}

