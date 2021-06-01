import React, { useState } from 'react';
import { Flex, Box, Heading, Button } from 'theme-ui';
import { useParams, useHistory } from 'react-router-dom';
import { handleDateToString } from '../../utils';
import { deleteTodo } from '../../api/todos';

// Components
import EditTodoForm from '../../components/EditTodoForm';

// Hocs
import WithModal from '../../hoc/WithModal';

// Recoil
import { useRecoilValue } from 'recoil';
import { todoResponseState } from '../../recoil/todo';
import { getUserQuery } from '../../recoil/user';
import { useRefreshReques } from '../../hook/useRefreshReques';
import { requestIDtodos } from '../../recoil/todo';
// Modal
const EditTodoFormModal = WithModal(EditTodoForm);

function TodoDetails() {
  const forceRefreshTodos = useRefreshReques(requestIDtodos);
  const { id } = useParams();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const todo = useRecoilValue(todoResponseState(id));
  const { title, created_at, updated_at, completed, user_id } = todo;
  const user = useRecoilValue(getUserQuery(user_id));
  const { name } = user;

  const handleGoBack = (e) => {
    history.goBack();
  };
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  const handleDeleteTask = (e) => {
    deleteTodo({ todo });
    forceRefreshTodos();
    history.push('/');
  };

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
          <b>Tytuł:</b> {title}
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
          <b>Zakończone:</b> {completed ? 'Tak' : 'Nie'}
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
          <b>Twórca:</b> {name}
        </Heading>
        <Flex sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box>
            <b>Utworzono: </b>
            {handleDateToString(created_at)}
          </Box>
          <Box>
            <b>Aktualizacja: </b>
            {handleDateToString(updated_at)}
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
      <EditTodoFormModal
        todo={todo}
        isOpen={showModal}
        onClose={handleToggleModal}
      />
    </Flex>
  );
}

export default TodoDetails;
