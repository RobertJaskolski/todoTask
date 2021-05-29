import { client } from './index';

// GET ALL TODOS
export const getTodos = async ({ page = 1, q = '' }) =>
  client({
    endpoint: '/todos',
    query: `?page=${page}${q}`,
  }).then((res) => {
    return { tasksList: [...res.data], pagination: res.meta.pagination };
  });

// POST

// PATCH

// PUT

// DELETE
