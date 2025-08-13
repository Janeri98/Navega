import React, { useContext } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { TareaContext } from '../Contex/TareaContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  AddTodo: undefined;
  Buscador: { id: number };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
  const { todos } = useContext(TareaContext);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lista De Tareas</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 8 }}>
            <Text>{item.texto}</Text>
            <Button
              title="Ver Detalle"
              onPress={() => navigation.navigate('Buscador', { id: item.id })}
            />
          </View>
        )}
      />
    </View>
  );
}

