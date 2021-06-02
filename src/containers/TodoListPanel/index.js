import React, { useEffect } from 'react';
import { Box, Flex } from 'theme-ui';

// Components
import InfoAboutTodos from '../../components/InfoAboutTodos';
import TodosList from '../../components/TodosList';
import PaginationTodosList from '../../components/PaginationTodosList';

// Recoil
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  todosResponseState,
  todosStatsQuery,
  filterTodosState,
  currentPageState,
} from '../../recoil/todo';

function TodoListPanel() {
  const { todoList, pagination } = useRecoilValue(todosResponseState);
  const { totalCompleted, totalUncompleted } = useRecoilValue(todosStatsQuery);
  const { completed } = useRecoilValue(filterTodosState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

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
    <>
      <Box sx={{ width: '90%', margin: '0px auto' }}>
        <Flex sx={{ flexWrap: 'wrap' }}>
          <InfoAboutTodos
            totalCompleted={totalCompleted}
            totalUncompleted={totalUncompleted}
            completed={completed}
          />
        </Flex>
      </Box>
      <Box
        sx={{
          width: '90%',
          margin: '20px auto',
          bg: 'highlight',
          borderRadius: '5px',
        }}
      >
        <PaginationTodosList
          pagination={pagination}
          currentPage={currentPage}
          handleBackPage={handleBackPage}
          handleNexPage={handleNexPage}
          handleGoToFirst={handleGoToFirst}
          handleGoToLast={handleGoToLast}
          handleSelectPage={handleSelectPage}
        />
      </Box>

      <TodosList todoList={todoList} />

      <Box
        sx={{
          width: '90%',
          margin: '20px auto',
          bg: 'highlight',
          borderRadius: '5px',
        }}
      >
        <PaginationTodosList
          pagination={pagination}
          currentPage={currentPage}
          handleBackPage={handleBackPage}
          handleNexPage={handleNexPage}
          handleGoToFirst={handleGoToFirst}
          handleGoToLast={handleGoToLast}
          handleSelectPage={handleSelectPage}
        />
      </Box>
    </>
  );
}

export default TodoListPanel;
