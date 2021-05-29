import React from 'react';
import { Box, Flex, Switch } from 'theme-ui';
import { useRecoilState, useRecoilValue } from 'recoil';
import { filterState, tasksStats } from '../../recoil/todos';

function InfoAboutTasks() {
  const [completed, setCompleted] = useRecoilState(filterState);
  const { totalCompletedNum, totalUncompletedNum } = useRecoilValue(tasksStats);
  const handleToggleCompleted = (e) => {
    setCompleted(!completed);
  };

  return (
    <Flex sx={{ flexWrap: 'wrap' }}>
      <Box
        sx={{
          flexBasis: ['80%', null, '40%'],
          fontSize: [3, null, 1, 2],
          ml: '10px',
          mb: '10px',
          fontWeight: 'bold',
          padding: '10px 20px',
          backgroundColor: 'softGreen',
          borderRadius: '5px',
          boxShadow: '0 0 5px green',
          opacity: !completed ? 0.9 : 0,
        }}
      >
        Zakończone: {totalCompletedNum}
      </Box>
      <Box
        sx={{
          flexBasis: ['80%', null, '40%'],
          fontSize: [3, null, 1, 2],
          ml: '10px',
          mb: '10px',
          fontWeight: 'bold',
          padding: '10px 20px',
          backgroundColor: 'lightRed',
          borderRadius: '5px',
          boxShadow: '0 0 5px red',
          opacity: !completed ? 0.9 : 0,
        }}
      >
        Niezakończone: {totalUncompletedNum}
      </Box>
      <Box
        sx={{
          fontWeight: 'bold',
          padding: '10px 20px',
          opacity: 0.9,
          flexBasis: ['100%'],
          mb: ['10px', null, '0px'],
        }}
      >
        <Switch
          defaultChecked={completed}
          onChange={handleToggleCompleted}
          label='Ukryj zakończone'
          aria-label='Ukryj zakończone'
        />
      </Box>
    </Flex>
  );
}

export default InfoAboutTasks;
