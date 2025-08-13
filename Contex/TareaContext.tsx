import { createContext } from 'react';
import { Tarea } from '../Modelos/Tarea';

export type TareaContextType = {
  todos: Tarea[];
  addTodo: (texto: string) => void;
  getTodoById: (id: number) => Tarea | undefined;
};

export const TareaContext = createContext<TareaContextType>({
  todos: [],
  addTodo: () => {},
  getTodoById: () => undefined
});

