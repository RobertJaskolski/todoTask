import React from 'react';
import { Grid } from 'theme-ui';

// Components
import TodoListItem from '../TodoListItem';

function TodosList({ todoList }) {
  return (
    <Grid columns={[1]} sx={{ width: '90%', margin: '20px auto' }}>
      {Array.isArray(todoList) &&
        todoList.length > 0 &&
        todoList.map((todo) => <TodoListItem {...todo} key={todo.id} />)}
    </Grid>
  );
}

export default TodosList;
