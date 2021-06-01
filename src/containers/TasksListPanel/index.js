import React from 'react';
import { Box } from 'theme-ui';

// Components
import InfoAboutTasks from '../../components/InfoAboutTasks';
import TasksList from '../../components/TasksList';
import PaginationTasks from '../../components/PaginationTasks';

// Recoil
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  todosResponseState,
  todosStatsQuery,
  filterTodosState,
} from '../../recoil/todo';

function TasksListPanel() {
  const { todoList, pagination } = useRecoilValue(todosResponseState);
  const { totalCompleted, totalUncompleted } = useRecoilValue(todosStatsQuery);
  const [filters, setFilters] = useRecoilState(filterTodosState);

  const handleToggleCompleteFilter = () => {
    setFilters({ ...filters, completed: !filters.completed });
  };

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
        <InfoAboutTasks
          totalCompleted={totalCompleted}
          totalUncompleted={totalUncompleted}
          handleToggleCompleted={handleToggleCompleteFilter}
          completed={filters?.completed}
        />
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

      <TasksList todoList={todoList} />

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
