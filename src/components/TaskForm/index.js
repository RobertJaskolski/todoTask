import React from 'react';
import {
  Flex,
  Textarea,
  Close,
  Heading,
  Checkbox,
  Label,
  Button,
  Box,
} from 'theme-ui';
import { useForm } from 'react-hook-form';
import { updateTodo } from '../../api/todos';
import { useSetRecoilState } from 'recoil';
import { forceReloadState } from '../../recoil/todo';

function TaskForm({ onClose, task }) {
  const setForceReloadState = useSetRecoilState(forceReloadState);
  const { register, handleSubmit } = useForm();
  const handleUpdateTask = async ({ data = {} }) => {
    return await updateTodo({ task, newTaskInfo: data }).then((res) => res);
  };
  const handleSubmitEditTask = (data) => {
    handleUpdateTask({ data });
    setForceReloadState((x) => x + 1);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitEditTask)}>
      <Flex sx={{ justifyContent: 'flex-end' }}>
        <Close aria-label='Zamknij modal' type='button' onClick={onClose} />
      </Flex>
      <Heading>Treść zadania</Heading>
      <Textarea
        {...register('title', { required: true })}
        placeholder='Wpisz nową treść'
        rows={10}
        defaultValue={task.title}
      />
      <Box sx={{ width: '80%', margin: '0px auto' }}>0/600</Box>
      <Flex sx={{ justifyContent: 'center' }}>
        <Label sx={{ justifyContent: 'center' }}>
          Ukończone
          <Checkbox
            {...register('completed')}
            defaultChecked={task.completed}
            sx={{ ml: '10px' }}
          />
        </Label>
      </Flex>
      <Flex sx={{ justifyContent: 'flex-end' }}>
        <Button aria-label='Zapisz edytowanie zadanie' type='submit'>
          Zapisz
        </Button>
      </Flex>
    </form>
  );
}

export default TaskForm;
