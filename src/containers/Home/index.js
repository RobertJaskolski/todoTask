import React from 'react';
import { Flex } from 'theme-ui';

// Containers
import NewTodoPanel from '../NewTodoPanel';
import TodoListPanel from '../TodoListPanel';

// Skeletons
import SkeletonTasksListPanel from '../../components/SkeletonTasksListPanel';

// ErrorBoundarys
import ErrorBoundaryForList from '../../components/ErrorBoundaryForList';

// Hoc
import WithUser from '../../hoc/WithUser';
const NewTaskPanelWithUser = WithUser(NewTodoPanel);

function Home() {
  return (
    <Flex sx={{ flexWrap: 'wrap' }}>
      <NewTaskPanelWithUser />
      <ErrorBoundaryForList>
        <React.Suspense fallback={<SkeletonTasksListPanel />}>
          <TodoListPanel />
        </React.Suspense>
      </ErrorBoundaryForList>
    </Flex>
  );
}

export default Home;
