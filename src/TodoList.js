import React from 'react';
import Todo from './Todo';
import { List } from '@material-ui/core';

function TodoList({ removeTodo, toggleComplete, todos }) {
  return (
    <List>
      {todos.map((todo) => (
        <Todo
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          id={todo.id}
          todo={todo}
        />
      ))}
    </List>
  );
}

export default TodoList;
