import React from 'react';
import { Heading, Textarea, Flex, Button, Box } from 'theme-ui';
import { useToasts } from 'react-toast-notifications';
import { addTodo } from '../../api/todos';

// Recoil
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { userState } from '../../recoil/user';
import { newTodoTextState, newTodoTextLengthQuery } from '../../recoil/todo';

function NewTaskPanel() {
  const [newTodoText, setNewTodoText] = useRecoilState(newTodoTextState);
  const user = useRecoilValueLoadable(userState);
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
    if (newTodoText?.length > 320) {
      addToast('Treść jest za duża', {
        appearance: 'info',
        autoDismiss: true,
      });
      return;
    }
    if (user?.contents[0])
      addTodo({
        data: {
          title: newTodoText,
          completed: false,
        },
        user_id: user.contents[0].id,
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

export default NewTaskPanel;
