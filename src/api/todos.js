import { client } from './index';
const API_KEY = process.env.REACT_APP_API_KEY;

// GET ALL TODOS
export const getTodos = async ({ page = 1, q = '' }) =>
  client({
    endpoint: '/todos',
    query: `?page=${page}${q}`,
  }).then((res) => {
    return { tasksList: [...res.data], pagination: res.meta.pagination };
  });

// POST
export const addTodo = async ({ data, user_id = 30 }) =>
  client({
    endpoint: `/users/${user_id}/todos`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  }).then((res) => {
    return res;
  });

// PATCH

// PUT

// DELETE
