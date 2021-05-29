import React from 'react';
import { Box } from 'theme-ui';
import InfoAboutTasks from '../../components/InfoAboutTasks';
import TasksList from '../../components/TasksList';
import PaginationTasks from '../../components/PaginationTasks';

function TasksListPanel() {
  return (
    <Box
      as='section'
      bg='muted'
      sx={{ flexBasis: '60%', height: '100vh', pt: 50, overflow: 'auto' }}
    >
      <Box sx={{ width: '90%', margin: '0px auto' }}>
        <React.Suspense fallback={<h1>Loading posts...</h1>}>
          <InfoAboutTasks />
        </React.Suspense>
      </Box>
      <Box
        sx={{
          width: '90%',
          margin: '20px auto',
          bg: 'highlight',
          borderRadius: '5px',
        }}
      >
        <React.Suspense fallback={<h1>Loading posts...</h1>}>
          <PaginationTasks />
        </React.Suspense>
      </Box>
      <React.Suspense fallback={<h1>Loading posts...</h1>}>
        <TasksList />
      </React.Suspense>
      <Box
        sx={{
          width: '90%',
          margin: '20px auto',
          bg: 'highlight',
          borderRadius: '5px',
        }}
      >
        <React.Suspense fallback={<h1>Loading posts...</h1>}>
          <PaginationTasks />
        </React.Suspense>
      </Box>
    </Box>
  );
}

export default TasksListPanel;
