import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoList } from './TodoList';

test('render', async () => {
  render(<TodoList title="Todos" />);

  const header = screen.getByRole('heading', { name: /todos/i });
  expect(header).toBeInTheDocument();

  const input = screen.getByLabelText(/description/i);
  expect(input).toBeInTheDocument();

  const button = screen.getByRole('button', { name: /add/i });
  expect(button).toBeInTheDocument();
  expect(button).toBeDisabled();
});

test('interact', async () => {
  render(<TodoList title="Todos" />);

  const input = screen.getByLabelText(/description/i);
  const button = screen.getByRole('button', { name: /add/i });

  await act(() => userEvent.type(input, 'w'));
  expect(button).toBeEnabled();
  await act(() => userEvent.type(input, 'ake up early'));
  await act(() => userEvent.click(button));
  expect(input).toHaveValue('');
  expect(await screen.findByText(/wake up early/i)).toBeInTheDocument();

  await act(() => userEvent.type(input, 'one more item{enter}'));
  expect(await screen.findByText(/one more item/i)).toBeInTheDocument();
});
