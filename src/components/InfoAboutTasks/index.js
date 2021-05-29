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
    <Flex>
      <Box
        sx={{
          fontWeight: 'bold',
          padding: '10px 20px',
          opacity: 0.9,
        }}
      >
        <Switch
          defaultChecked={completed}
          onChange={handleToggleCompleted}
          label='Ukryj zakończone'
        />
      </Box>
      {!completed && (
        <>
          <Box
            sx={{
              width: '170px',
              ml: '20px',
              fontWeight: 'bold',
              padding: '10px 20px',
              backgroundColor: 'softGreen',
              borderRadius: '5px',
              boxShadow: '0 0 5px green',
              opacity: 0.9,
            }}
          >
            Zakończone / {totalCompletedNum}
          </Box>
          <Box
            sx={{
              width: '190px',
              ml: '20px',
              fontWeight: 'bold',
              padding: '10px 20px',
              backgroundColor: 'lightRed',
              borderRadius: '5px',
              boxShadow: '0 0 5px red',
              opacity: 0.9,
            }}
          >
            Niezakończone / {totalUncompletedNum}
          </Box>
        </>
      )}
    </Flex>
  );
}

export default InfoAboutTasks;
