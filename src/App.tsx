import { type ComponentType } from 'react';
import { TodoList } from './TodoList';

export const App: ComponentType = () => {
  return <TodoList title="Todos" />;
};
