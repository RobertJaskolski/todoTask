import { client } from './index';

// GET TODO
export const getTodo = ({ id = 1 }) =>
  client({
    endpoint: `/todos/${id}`,
  }).then((res) => {
    if (res.code === 200) return res.data;
    if (res.code === 404)
      throw Promise.reject(
        `Nie ma takiego zadanie - Możliwe, że przed chwilą ktoś je usunął ;)`
      );
    if (res.code !== 200 && res.code !== 404)
      throw Promise.reject(`Wystąpił błąd z zaptaniem!`);
  });

// GET ALL TODOS
export const getTodos = ({ page = 1, q = '' }) =>
  client({
    endpoint: '/todos',
    query: `?page=${page}${q}`,
  }).then((res) => {
    if (res.code === 200)
      return { todoList: [...res.data], pagination: res.meta.pagination };
    if (res.code !== 200)
      throw Promise.reject(`Error HTTP status: ${res.code}`);
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
export const updateTodo = ({ todo = {}, newData }) =>
  client({
    endpoint: `/todos/${todo.id}`,
    options: {
      method: 'PATCH',
      body: JSON.stringify(newData),
    },
  }).then((res) => {
    if (res.code === 204 || res.code === 200) return res.data;
    else return todo;
  });

// DELETE
export const deleteTodo = ({ todo = {} }) =>
  client({
    endpoint: `/todos/${todo.id}`,
    options: {
      method: 'DELETE',
    },
  }).then((res) => {
    if (res.code === 204 || res.code === 200) return res.data;
    else return todo;
  });
