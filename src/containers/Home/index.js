import React from 'react';
import { Flex } from 'theme-ui';
import NewTaskPanel from '../NewTaskPanel';
import TasksListPanel from '../TasksListPanel';
import SkeletonTasksListPanel from '../../components/SkeletonTasksListPanel';

function Home() {
  return (
    <Flex>
      <NewTaskPanel />
      <React.Suspense fallback={<SkeletonTasksListPanel />}>
        <TasksListPanel />
      </React.Suspense>
    </Flex>
  );
}

export default Home;
