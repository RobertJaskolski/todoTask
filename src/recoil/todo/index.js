import { atom, selector, selectorFamily, atomFamily } from 'recoil';
import { getTodos, getTodo } from '../../api/todos';
import { currentUserState } from '../user';

export const requestIDtodos = atom({
  key: 'requestIDtodos',
  default: 0,
});

export const requestIDtodo = atom({
  key: 'requestIDtodo',
  default: 0,
});

export const currentPageState = atom({
  key: 'currentPageState',
  default: 1,
});

export const filterTodosState = atom({
  key: 'filterTodosState',
  default: {
    completed: false,
    my: false,
  },
});

// Todos query and atom
export const todosResponseQuery = selector({
  key: 'todosResponseQuery',
  get: async ({ get }) => {
    get(requestIDtodos);

    const { completed, my } = get(filterTodosState);
    const user = get(currentUserState);
    const page = get(currentPageState);
    const search = get(todoSearchText);
    let query = '';

    if (my) query += `&user_id=${user.id}`;
    if (completed) query += `&completed=false`;
    if (search) query += `&title=${search}`;

    // All todos
    const response = await getTodos({
      page,
      q: query,
    }).catch((err) => {
      throw err;
    });
    return response;
  },
});

export const todosResponseState = atom({
  key: 'todosResponseState',
  default: todosResponseQuery,
});

// Todos stats selector
export const todosStatsQuery = selector({
  key: 'todosStatsQuery',
  get: ({ get }) => {
    const { todoList } = get(todosResponseState);
    const totalNum = todoList.length;
    const totalCompleted = todoList.filter((item) => item.completed).length;
    const totalUncompleted = totalNum - totalCompleted;
    return {
      totalCompleted,
      totalUncompleted,
    };
  },
});

// New todo text atom and length text
export const newTodoTextState = atom({
  key: 'newTodoTextState',
  default: '',
});

export const newTodoTextLengthQuery = selector({
  key: 'newTodoTextLengthQuery',
  get: ({ get }) => {
    const text = get(newTodoTextState);
    return `${text.length}/200`;
  },
});

// Todo query and atom
export const todoResponseQuery = selectorFamily({
  key: 'todoResponseQuery',
  get:
    (id) =>
    async ({ get }) => {
      get(requestIDtodo);
      const response = await getTodo({ id }).catch((err) => {
        throw err;
      });
      return response;
    },
});

export const todoResponseState = atomFamily({
  key: 'todoResponseState',
  default: todoResponseQuery,
});

// Todo searchText
export const todoSearchText = atom({
  key: 'todoSearchText',
  default: '',
});
