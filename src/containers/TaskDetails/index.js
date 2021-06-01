import React, { useEffect, useState } from 'react';
import { Flex, Box, Heading, Button } from 'theme-ui';
import { useParams, useHistory } from 'react-router-dom';
import { handleDateToString } from '../../utils';
import { deleteTodo } from '../../api/todos';

// Components
import TaskForm from '../../components/TaskForm';

// Hocs
import WithModal from '../../hoc/WithModal';

// Recoil
//import { useSetRecoilState, useRecoilValue } from 'recoil';
//import { currentTaskIDState, taskState } from '../../recoil/todo';
//import { forceReloadState } from '../../recoil/todo';

const TaskFormModal = WithModal(TaskForm);

function TaskDetails() {
  //const setForceReloadState = useSetRecoilState(forceReloadState);
  const { id } = useParams();
  const history = useHistory();
  //const setCurrentTaskID = useSetRecoilState(currentTaskIDState);
  //const task = useRecoilValue(taskState);
  const task = {};
  const [showModal, setShowModal] = useState(false);
  const handleGoBack = (e) => {
    history.goBack();
  };
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  const handleDeleteTask = (e) => {
    deleteTodo({ task });
    //setForceReloadState((x) => x + 1);
    history.push('/');
  };
  useEffect(() => {
    //setCurrentTaskID(id);
  });

  return (
    <Flex
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '90vh',
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
          <b>Tytuł:</b> {task?.title}
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
          <b>Zakończone:</b> {task?.completed ? 'Tak' : 'Nie'}
        </Heading>
        <Flex sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box>
            <b>Utworzono: </b>
            {handleDateToString(task?.created_at)}
          </Box>
          <Box>
            <b>Aktualizacja: </b>
            {handleDateToString(task?.updated_at)}
          </Box>
        </Flex>
        <Flex
          sx={{ justifyContent: 'space-between', flexWrap: 'wrap', mt: '15px' }}
        >
          <Button onClick={handleGoBack} sx={{ mb: '15px' }}>
            Powrót
          </Button>
          <Box>
            <Button
              variant='deleted'
              sx={{ mr: '15px' }}
              onClick={handleDeleteTask}
            >
              Usuń
            </Button>
            <Button variant='secondary' onClick={handleToggleModal}>
              Edytuj
            </Button>
          </Box>
        </Flex>
      </Box>
      <TaskFormModal
        task={task}
        isOpen={showModal}
        onClose={handleToggleModal}
      />
    </Flex>
  );
}

export default TaskDetails;
