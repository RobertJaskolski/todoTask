import React from 'react';
import { Heading, Textarea, Flex, Button, Box } from 'theme-ui';
import { addTodo } from '../../api/todos';
import { useRecoilState } from 'recoil';
import { newTaskTextState } from '../../recoil/todo';
import { useToasts } from 'react-toast-notifications';

function NewTaskPanel() {
  const [newTask, setNewTask] = useRecoilState(newTaskTextState);
  const { addToast } = useToasts();
  const handleOnChangeText = (e) => {
    setNewTask(e.target.value);
  };
  const handlePostNewTask = (e) => {
    if (!newTask) return;

    addTodo({
      data: {
        title: newTask,
        completed: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    })
      .then((res) => {
        console.log(res.code);
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
        setNewTask('');
      })
      .catch(() => {
        addToast('Nie udało się stworzyć zadania!', {
          appearance: 'error',
          autoDismiss: true,
        });
        setNewTask('');
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
        value={newTask}
        onChange={handleOnChangeText}
      />
      <Flex
        sx={{
          justifyContent: 'flex-end',
          width: '80%',
          margin: '0px auto',
        }}
      >
        <Button
          aria-label='Dodaj zadanie'
          variant='secondary'
          onClick={handlePostNewTask}
        >
          Dodaj zadanie
        </Button>
      </Flex>
    </Box>
  );
}

export default NewTaskPanel;
