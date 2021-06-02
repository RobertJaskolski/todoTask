import React from 'react';
import { Heading, Textarea, Flex, Button, Box } from 'theme-ui';
import PropTypes from 'prop-types';
import { useToasts } from 'react-toast-notifications';
import { addTodo } from '../../api/todos';

// Recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  newTodoTextState,
  newTodoTextLengthQuery,
  requestIDtodos,
} from '../../recoil/todo';
import { useRefreshReques } from '../../hook/useRefreshReques';

function NewTodoPanel({ user }) {
  const foreceRefreshTodos = useRefreshReques(requestIDtodos);
  const [newTodoText, setNewTodoText] = useRecoilState(newTodoTextState);
  const todoTextLenght = useRecoilValue(newTodoTextLengthQuery);
  const { addToast } = useToasts();

  const handleOnChangeText = (e) => {
    setNewTodoText(e.target.value);
  };

  const handlePostNewTodo = (e) => {
    if (!newTodoText) {
      addToast('Dodaj treść zadania', {
        appearance: 'info',
        autoDismiss: true,
      });
      return;
    }
    if (newTodoText?.length > 200) {
      addToast('Treść jest za duża', {
        appearance: 'info',
        autoDismiss: true,
      });
      return;
    }
    if (user?.contents)
      addTodo({
        data: {
          title: newTodoText,
          completed: false,
        },
        user_id: user.contents.id,
      })
        .then((res) => {
          if (res.code !== 201 && res.code !== 200) {
            addToast('Nie udało się stworzyć zadania!', {
              appearance: 'error',
              autoDismiss: true,
            });
          } else {
            addToast('Stworzono zadanie!', {
              appearance: 'success',
              autoDismiss: true,
            });
            foreceRefreshTodos();
          }
          setNewTodoText('');
        })
        .catch(() => {
          addToast('Nie udało się stworzyć zadania!', {
            appearance: 'error',
            autoDismiss: true,
          });
          setNewTodoText('');
        });
  };

  return (
    <Box
      as='section'
      sx={{
        flexBasis: ['100%', null, '40%'],
        minHeight: '100vh',
        pt: 100,
        pb: 50,
        position: 'relative',
      }}
    >
      <Heading as='h1' sx={{ color: 'forms' }}>
        Nowe zadanie
      </Heading>
      <Textarea
        placeholder='Wpisz swoje zadanie'
        rows={20}
        value={newTodoText}
        onChange={handleOnChangeText}
      />

      <Flex
        sx={{
          justifyContent: 'space-between',
          width: '80%',
          margin: '0px auto',
        }}
      >
        <Box sx={{ color: 'forms' }}>{todoTextLenght}</Box>
        <Button
          aria-label='Dodaj zadanie'
          variant='secondary'
          onClick={handlePostNewTodo}
        >
          Dodaj zadanie
        </Button>
      </Flex>
    </Box>
  );
}

NewTodoPanel.propTypes = {
  user: PropTypes.shape({
    state: PropTypes.string.isRequired,
    contents: PropTypes.oneOfType([
      PropTypes.instanceOf(Promise),
      PropTypes.shape({
        created_at: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.instanceOf(Date),
        ]),
        updated_at: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.instanceOf(Date),
        ]),
        id: PropTypes.number,
        gender: PropTypes.oneOf(['Male', 'Female']),
        status: PropTypes.string,
        email: PropTypes.string,
        name: PropTypes.string,
      }),
    ]).isRequired,
  }),
};

export default NewTodoPanel;
