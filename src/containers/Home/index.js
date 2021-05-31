import React from 'react';
import { Flex } from 'theme-ui';
import NewTaskPanel from '../NewTaskPanel';
import TasksListPanel from '../TasksListPanel';
import SkeletonTasksListPanel from '../../components/SkeletonTasksListPanel';
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
