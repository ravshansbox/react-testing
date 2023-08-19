import { type ComponentType, useState } from 'react';
import { styled } from '@macaron-css/react';

const Main = styled('main', {
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const List = styled('ul', {
  base: {
    listStyleType: 'none',
  },
});

type Todo = {
  description: string;
  isCompleted: boolean;
};

type TodoListProps = {
  title: string;
};
export const TodoList: ComponentType<TodoListProps> = ({ title }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [description, setDescription] = useState('');

  return (
    <Main>
      <h1>{title}</h1>
      <List>
        {todos.map((todo, index) => (
          <li key={index}>{todo.description}</li>
        ))}
      </List>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setTodos((todos) => [
            ...todos,
            { description: description, isCompleted: false },
          ]);
          setDescription('');
        }}
      >
        <label>
          <span>Description</span>
          <input
            type="text"
            value={description}
            onChange={(event) => {
              setDescription(event.currentTarget.value);
            }}
          />
        </label>
        <button type="submit" disabled={description === ''}>
          Add
        </button>
      </form>
    </Main>
  );
};
