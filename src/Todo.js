import React from 'react';
import { Checkbox, IconButton, ListItem, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function Todo({ removeTodo, toggleComplete, todo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveTodo() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: 'flex' }}>
      <Checkbox
        onClick={handleCheckboxClick}
        checked={todo.complete}
      />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? 'line-through' : null,
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveTodo}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo;
