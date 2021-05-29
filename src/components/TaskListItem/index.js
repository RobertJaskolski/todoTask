import React from 'react';
import { Card, IconButton, Box } from 'theme-ui';
import Link from '../Link';
import { FiTrash2, FiCheck } from 'react-icons/fi';

function TaskListItem({ title, id, completed }) {
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
