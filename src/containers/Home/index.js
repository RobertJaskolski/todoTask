import React from 'react';
import { Flex, Box } from 'theme-ui';
import NewTaskPanel from '../NewTaskPanel';
import TasksListPanel from '../TasksListPanel';
import Header from '../../components/Header';

function Home() {
  return (
    <Flex>
      <Header />
      <Box
        as='section'
        sx={{
          flexBasis: '40%',
          height: '100vh',
          pt: 100,
          position: 'relative',
        }}
      >
        <NewTaskPanel />
      </Box>
      <Box
        as='section'
        bg='muted'
        sx={{ flexBasis: '60%', height: '100vh', pt: 50 }}
      >
        <TasksListPanel />
      </Box>
    </Flex>
  );
}

export default Home;
