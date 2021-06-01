import React, { useEffect } from 'react';
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
  currentPageState,
} from '../../recoil/todo';

function TasksListPanel() {
  const { todoList, pagination } = useRecoilValue(todosResponseState);
  const { totalCompleted, totalUncompleted } = useRecoilValue(todosStatsQuery);
  const [filters, setFilters] = useRecoilState(filterTodosState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  // Handlers filters
  const handleToggleCompleteFilter = () => {
    setFilters({ ...filters, completed: !filters.completed });
  };
  const handleToggleMyFilter = () => {
    setFilters({ ...filters, my: !filters.my });
  };

  // Handlers pagination
  const handleNexPage = () => {
    setCurrentPage((page) => page + 1);
  };
  const handleBackPage = () => {
    setCurrentPage((page) => page - 1);
  };
  const handleGoToFirst = () => {
    setCurrentPage(1);
  };
  const handleGoToLast = () => {
    setCurrentPage(pagination?.pages);
  };
  const handleSelectPage = (e) => {
    setCurrentPage(Number(e.target.value));
  };

  useEffect(() => {
    if (currentPage > pagination?.pages) {
      setCurrentPage(1);
    }
  });

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
          handleToggleMy={handleToggleMyFilter}
          my={filters?.my}
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
        <PaginationTasks
          pagination={pagination}
          currentPage={currentPage}
          handleBackPage={handleBackPage}
          handleNexPage={handleNexPage}
          handleGoToFirst={handleGoToFirst}
          handleGoToLast={handleGoToLast}
          handleSelectPage={handleSelectPage}
        />
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
        <PaginationTasks
          pagination={pagination}
          currentPage={currentPage}
          handleBackPage={handleBackPage}
          handleNexPage={handleNexPage}
          handleGoToFirst={handleGoToFirst}
          handleGoToLast={handleGoToLast}
          handleSelectPage={handleSelectPage}
        />
      </Box>
    </Box>
  );
}

export default TasksListPanel;
