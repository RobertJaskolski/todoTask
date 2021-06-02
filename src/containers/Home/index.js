import React, { useState, useCallback } from 'react';
import { Flex, Box } from 'theme-ui';
import debounce from 'lodash.debounce';

// Containers
import NewTodoPanel from '../NewTodoPanel';
import TodoListPanel from '../TodoListPanel';

// Components
import FiltersList from '../../components/FiltersList';

// Skeletons
import SkeletonTodosListPanel from '../../components/SkeletonTodosListPanel';

// ErrorBoundarys
import ErrorBoundaryForList from '../../components/ErrorBoundaryForList';

// Recoil
import { useRecoilState, useSetRecoilState } from 'recoil';
import { filterTodosState, todoSearchText } from '../../recoil/todo';

// Hoc
import WithUser from '../../hoc/WithUser';
const NewTaskPanelWithUser = WithUser(NewTodoPanel);

function Home() {
  const [filters, setFilters] = useRecoilState(filterTodosState);
  const setSearchText = useSetRecoilState(todoSearchText);
  const [search, setSearch] = useState('');

  // Handlers filters
  const handleToggleCompleteFilter = () => {
    setFilters({ ...filters, completed: !filters.completed });
  };
  const handleToggleMyFilter = () => {
    setFilters({ ...filters, my: !filters.my });
  };
  const delayHandleSearch = useCallback(
    debounce((text) => {
      setSearchText(text);
    }, 1000),
    []
  );
  const handleOnChangeSearchText = (e) => {
    setSearch(e.target.value);
    delayHandleSearch(e.target.value);
  };
  return (
    <Flex sx={{ flexWrap: 'wrap' }}>
      <NewTaskPanelWithUser />
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
        <FiltersList
          handleToggleCompleted={handleToggleCompleteFilter}
          completed={filters?.completed}
          handleToggleMy={handleToggleMyFilter}
          my={filters?.my}
          handleOnChangeSearchText={handleOnChangeSearchText}
          search={search}
        />
        <ErrorBoundaryForList>
          <React.Suspense fallback={<SkeletonTodosListPanel />}>
            <TodoListPanel />
          </React.Suspense>
        </ErrorBoundaryForList>
      </Box>
    </Flex>
  );
}

export default Home;
