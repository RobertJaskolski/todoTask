import React from 'react';
import { Grid } from 'theme-ui';
import PropTypes from 'prop-types';

// Components
import TodoListItem from '../TodoListItem';

function TodosList({ todoList }) {
  return (
    <Grid columns={[1]} sx={{ width: '90%', margin: '20px auto' }}>
      {Array.isArray(todoList) &&
        todoList.length > 0 &&
        todoList.map((todo) => <TodoListItem {...todo} key={todo.id} />)}
      {Array.isArray(todoList) && todoList.length === 0 && (
        <h1>Brak wyników</h1>
      )}
    </Grid>
  );
}

TodosList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.exact({
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
    })
  ).isRequired,
};

export default TodosList;
