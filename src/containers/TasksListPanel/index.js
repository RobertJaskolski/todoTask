import React from 'react';
import { Box } from 'theme-ui';
import InfoAboutTasks from '../../components/InfoAboutTasks';
import TasksList from '../../components/TasksList';
import PaginationTasks from '../../components/PaginationTasks';
import { useRecoilValue } from 'recoil';
import { tasksState } from '../../recoil/todos';

function TasksListPanel() {
  const { tasksList, pagination } = useRecoilValue(tasksState);
  return (
    <Box
      as='section'
      bg='muted'
      sx={{
        flexBasis: ['100%', null, '60%'],
        minheight: '100vh',
        maxHeight: [null, null, '100vh'],
        pt: 50,
        overflow: 'auto',
      }}
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
        <PaginationTasks pagination={pagination} />
      </Box>

      <TasksList tasksList={tasksList} />

      <Box
        sx={{
          width: '90%',
          margin: '20px auto',
          bg: 'highlight',
          borderRadius: '5px',
        }}
      >
        <PaginationTasks pagination={pagination} />
      </Box>
    </Box>
  );
}

export default TasksListPanel;
