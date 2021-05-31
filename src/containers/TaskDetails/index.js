import React, { useEffect } from 'react';
import { Flex, Box, Heading, Button } from 'theme-ui';
import { useParams } from 'react-router-dom';
import { useSetRecoilState, useRecoilValueLoadable } from 'recoil';
import { currentTaskIDState, taskState } from '../../recoil/todo';
import { handleDateToString } from '../../utils';

function TaskDetails() {
  const { id } = useParams();
  const setCurrentTaskID = useSetRecoilState(currentTaskIDState);
  const task = useRecoilValueLoadable(taskState);
  useEffect(() => {
    setCurrentTaskID(id);
  });

  return (
    <Flex
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'muted',
          borderRadius: '5px',
          padding: ['30px 10px 20px', '50px 20px 20px'],
          flexBasis: ['95%', '85%', '50%', '35%'],
          color: 'forms',
        }}
      >
        <Heading as='h1'>Szczegóły zadania</Heading>
        <Heading
          sx={{
            m: '20px 0px',
            textAlign: 'left',
            fontWeight: 'text',
            textTransform: 'none',
          }}
          as='h2'
        >
          <b>Tytuł:</b> {task?.contents?.task?.title}
        </Heading>
        <Heading
          sx={{
            m: '20px 0px',
            textAlign: 'left',
            fontWeight: 'text',
            textTransform: 'none',
          }}
          as='h2'
        >
          <b>Zakończone:</b> {task?.contents?.task?.completed ? 'Tak' : 'Nie'}
        </Heading>
        <Flex sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box>
            <b>Utworzono: </b>
            {handleDateToString(task?.contents?.task?.created_at)}
          </Box>
          <Box>
            <b>Aktualizacja: </b>
            {handleDateToString(task?.contents?.task?.updated_at)}
          </Box>
        </Flex>
        <Flex
          sx={{ justifyContent: 'space-between', flexWrap: 'wrap', mt: '15px' }}
        >
          <Button sx={{ mb: '15px' }}>Powrót</Button>
          <Box>
            <Button variant='deleted' sx={{ mr: '15px' }}>
              Usuń
            </Button>
            <Button variant='secondary'>Edytuj</Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default TaskDetails;
