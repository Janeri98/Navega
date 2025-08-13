import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { TareaContext } from '../Contex/TareaContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  AddTodo: undefined;
  Buscador: { id: number };
};

type AddTodoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddTodo'>;

export default function AddTodo() {
  const [texto, setTexto] = useState('');
  const { addTodo } = useContext(TareaContext);
  const navigation = useNavigation<AddTodoScreenNavigationProp>();

  const handleAdd = () => {
    if (texto.trim() !== '') {
      addTodo(texto);
      navigation.navigate('Home'); 
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nueva tarea"
        value={texto}
        onChangeText={setTexto}
        style={styles.input}
      />
      <Button title="Agregar" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 8 }
});

