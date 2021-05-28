import React from 'react';
import { Flex } from 'theme-ui';
import NewTaskPanel from '../NewTaskPanel';
import TasksListPanel from '../TasksListPanel';

function Home() {
  return (
    <Flex>
      <NewTaskPanel />
      <TasksListPanel />
    </Flex>
  );
}

export default Home;
