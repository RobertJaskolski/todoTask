import React from 'react';
import { Flex } from 'theme-ui';

// Containers
import NewTaskPanel from '../NewTaskPanel';
import TasksListPanel from '../TasksListPanel';

// Skeletons
import SkeletonTasksListPanel from '../../components/SkeletonTasksListPanel';

// ErrorBoundarys
import ErrorBoundaryForList from '../../components/ErrorBoundaryForList';

// Hoc
import WithUser from '../../hoc/WithUser';
const NewTaskPanelWithUser = WithUser(NewTaskPanel);

function Home() {
  return (
    <Flex sx={{ flexWrap: 'wrap' }}>
      <NewTaskPanelWithUser />
      <ErrorBoundaryForList>
        <React.Suspense fallback={<SkeletonTasksListPanel />}>
          <TasksListPanel />
        </React.Suspense>
      </ErrorBoundaryForList>
    </Flex>
  );
}

export default Home;
