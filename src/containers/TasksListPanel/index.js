import React from 'react';
import { Box, Grid } from 'theme-ui';
import { data } from '../data';
import TaskListItem from '../../components/TaskListItem';
import PaginationTasks from '../../components/PaginationTasks';
import InfoAboutTasks from '../../components/InfoAboutTasks';

function TasksListPanel() {
  return (
    <Box
      as='section'
      bg='muted'
      sx={{ flexBasis: '60%', height: '100vh', pt: 50, overflow: 'auto' }}
    >
      <Box sx={{ width: '90%', margin: '0px auto' }}>
        <InfoAboutTasks />
      </Box>
      <Box
        sx={{
          width: '90%',
          margin: '20px auto',
          bg: 'highlight',
          borderRadius: '5px',
        }}
      >
        <PaginationTasks />
      </Box>
      <Grid columns={[1]} sx={{ width: '90%', margin: '20px auto' }}>
        {Array.isArray(data) &&
          data.length > 0 &&
          data.map((todo) => <TaskListItem {...todo} key={todo.id} />)}
      </Grid>
      <Box
        sx={{
          width: '90%',
          margin: '20px auto',
          bg: 'highlight',
          borderRadius: '5px',
        }}
      >
        <PaginationTasks />
      </Box>
    </Box>
  );
}

export default TasksListPanel;
