import { client } from './index';

// GET TODO
export const getTodo = ({ id = 1 }) =>
  client({
    endpoint: `/todos/${id}`,
  }).then((res) => {
    return { task: res.data };
  });

// GET ALL TODOS
export const getTodos = ({ page = 1, q = '' }) =>
  client({
    endpoint: '/todos',
    query: `?page=${page}${q}`,
  }).then((res) => {
    return { tasksList: [...res.data], pagination: res.meta.pagination };
  });

// POST
export const addTodo = ({ data, user_id = 30 }) =>
  client({
    endpoint: `/users/${user_id}/todos`,
    options: {
      method: 'POST',
      body: JSON.stringify(data),
    },
  }).then((res) => {
    return res;
  });

// PATCH

// DELETE
