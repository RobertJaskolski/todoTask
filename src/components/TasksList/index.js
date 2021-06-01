import React from 'react';
import { Grid } from 'theme-ui';

// Components
import TaskListItem from '../TaskListItem';

function TasksList({ todoList }) {
  return (
    <Grid columns={[1]} sx={{ width: '90%', margin: '20px auto' }}>
      {Array.isArray(todoList) &&
        todoList.length > 0 &&
        todoList.map((todo) => <TaskListItem {...todo} key={todo.id} />)}
    </Grid>
  );
}

export default TasksList;
