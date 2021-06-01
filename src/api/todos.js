import { client } from './index';

// GET TODO
export const getTodo = ({ id = 1 }) =>
  client({
    endpoint: `/todos/${id}`,
  }).then((res) => {
    return res.data;
  });

// GET ALL TODOS
export const getTodos = ({ page = 1, q = '' }) =>
  client({
    endpoint: '/todos',
    query: `?page=${page}${q}`,
  }).then((res) => {
    if (res.code === 200)
      return { todoList: [...res.data], pagination: res.meta.pagination };
    if (res.code !== 200) throw Error('Loading data error');
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
export const updateTodo = ({ task = {}, newTaskInfo }) =>
  client({
    endpoint: `/todos/${task.id}`,
    options: {
      method: 'PATCH',
      body: JSON.stringify(newTaskInfo),
    },
  }).then((res) => {
    if (res.code === 204 || res.code === 200) return res.data;
    else return task;
  });

// DELETE
export const deleteTodo = ({ task = {} }) =>
  client({
    endpoint: `/todos/${task.id}`,
    options: {
      method: 'DELETE',
    },
  }).then((res) => {
    if (res.code === 204 || res.code === 200) return res.data;
    else return task;
  });
