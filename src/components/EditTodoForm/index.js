import React from 'react';
import {
  Flex,
  Textarea,
  Close,
  Heading,
  Checkbox,
  Label,
  Button,
} from 'theme-ui';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { updateTodo } from '../../api/todos';

// Recoil
import { useRefreshReques } from '../../hook/useRefreshReques';
import { requestIDtodo, requestIDtodos } from '../../recoil/todo';

function EditTodoForm({ onClose, todo }) {
  const forceRefreshTodo = useRefreshReques(requestIDtodo);
  const forceRefreshTodos = useRefreshReques(requestIDtodos);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { title, completed } = todo;

  const handleUpdateTask = async ({ data = {} }) => {
    return await updateTodo({ todo, newData: data }).then((res) => res);
  };
  const handleSubmitEditTask = (data) => {
    handleUpdateTask({ data });
    forceRefreshTodo();
    forceRefreshTodos();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitEditTask)}>
      <Flex sx={{ justifyContent: 'flex-end' }}>
        <Close aria-label='Zamknij modal' type='button' onClick={onClose} />
      </Flex>
      <Heading as='h3'>Treść zadania</Heading>
      <Textarea
        {...register('title', { required: true, minLength: 1, maxLength: 200 })}
        placeholder='Wpisz nową treść'
        rows={10}
        defaultValue={title}
      />
      <Flex sx={{ justifyContent: 'center' }}>
        <Label sx={{ justifyContent: 'center' }}>
          Ukończone
          <Checkbox
            {...register('completed')}
            defaultChecked={completed}
            sx={{ ml: '10px' }}
          />
        </Label>
      </Flex>
      <Flex
        sx={{
          justifyContent: 'center',
          height: '16px',
          color: 'red',
          fontSize: '12px',
        }}
      >
        {errors?.title?.type === 'required' && 'Zadanie musi mieć treść'}
        {errors?.title?.type === 'maxLength' &&
          'Zadanie może mieć max 200 znaków'}
      </Flex>
      <Flex sx={{ justifyContent: 'flex-end' }}>
        <Button aria-label='Zapisz edytowanie zadanie' type='submit'>
          Zapisz
        </Button>
      </Flex>
    </form>
  );
}

EditTodoForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  todo: PropTypes.exact({
    completed: PropTypes.bool,
    created_at: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]),
    updated_at: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]),
    id: PropTypes.number,
    title: PropTypes.string,
    user_id: PropTypes.number,
  }).isRequired,
};

export default EditTodoForm;
