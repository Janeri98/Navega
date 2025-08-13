import React, { useState } from 'react';
import { Tarea } from '../Modelos/Tarea';
import { TareaContext } from '../Contex/TareaContext';

type Props = {
  children: React.ReactNode;
};

export const ProviderTarea = ({ children }: Props) => {
  const [todos, setTodos] = useState<Tarea[]>([]);

  const addTodo = (texto: string) => {
    const nuevaTarea: Tarea = {
      id: Date.now(),
      texto
    };
    setTodos([...todos, nuevaTarea]);
  };

  const getTodoById = (id: number) => {
    return todos.find(t => t.id === id);
  };

  return (
    <TareaContext.Provider value={{ todos, addTodo, getTodoById }}>
      {children}
    </TareaContext.Provider>
  );
};

