import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, TextField } from '@material-ui/core';

export default function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      // reset task input
      setTodo({ ...todo, task: '' });
    }
  }

  return (
    <form class="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
        placeholder="Add New Item"
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
}
