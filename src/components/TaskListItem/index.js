import React from 'react';
import { Card, IconButton, Box } from 'theme-ui';
import { FiTrash2, FiCheck } from 'react-icons/fi';
import { deleteTodo, updateTodo } from '../../api/todos';

// Components
import Link from '../Link';

// Recoil
import { requestIDtodos } from '../../recoil/todo';
import { useRefreshReques } from '../../hook/useRefreshReques';

function TaskListItem({ title, id, completed }) {
  const forceRefreshTodos = useRefreshReques(requestIDtodos);

  const handleUpdateTask = async (e) => {
    await updateTodo({ todo: { id }, newData: { completed: true } });
    forceRefreshTodos();
  };

  const handleDeleteTask = (e) => {
    deleteTodo({ todo: { id } });
    forceRefreshTodos();
  };

  return (
    <Card variant={completed ? 'completed' : 'uncompleted'}>
      <Link
        sx={{
          flexBasis: '88%',
          display: 'flex',
          alignItems: 'center',
        }}
        to={`/todo/${id}`}
      >
        <Box sx={{ overflowWrap: 'break-word' }}>{title}</Box>
      </Link>
      <IconButton
        onClick={completed ? handleDeleteTask : handleUpdateTask}
        aria-label={
          completed ? 'Usunięcie zadania' : 'Zaznaczenie zadania jako wykonane'
        }
        sx={{
          border: '0',
          borderLeft: '2px solid',
          borderLeftColor: 'text',
          borderRadius: '0',
          fontSize: [1, 2, 3, 4],
          flexBasis: '10%',
          '&:hover': {
            color: completed ? 'lightRed' : 'softGreen',
            borderLeftColor: completed ? 'lightRed' : 'softGreen',
          },
        }}
      >
        {completed ? <FiTrash2 /> : <FiCheck />}
      </IconButton>
    </Card>
  );
}

export default TaskListItem;
