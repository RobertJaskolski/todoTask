import React from 'react';
import { Grid } from 'theme-ui';
import TaskListItem from '../TaskListItem';
import { useRecoilValue } from 'recoil';
import { tasksState } from '../../recoil/todos';

function TasksList() {
  const { tasksList } = useRecoilValue(tasksState);

  return (
    <Grid columns={[1]} sx={{ width: '90%', margin: '20px auto' }}>
      {Array.isArray(tasksList) &&
        tasksList.length > 0 &&
        tasksList.map((todo) => <TaskListItem {...todo} key={todo.id} />)}
    </Grid>
  );
}

export default TasksList;
