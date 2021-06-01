import React from 'react';
import { Flex } from 'theme-ui';

// Containers
import NewTaskPanel from '../NewTaskPanel';
import TasksListPanel from '../TasksListPanel';

// Skeletons
import SkeletonTasksListPanel from '../../components/SkeletonTasksListPanel';

// ErrorBoundarys
import ErrorBoundaryForList from '../../components/ErrorBoundaryForList';

function Home() {
  return (
    <Flex sx={{ flexWrap: 'wrap' }}>
      <NewTaskPanel />
      <ErrorBoundaryForList>
        <React.Suspense fallback={<SkeletonTasksListPanel />}>
          <TasksListPanel />
        </React.Suspense>
      </ErrorBoundaryForList>
    </Flex>
  );
}

export default Home;
