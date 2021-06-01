import { atom, selector } from 'recoil';
import { getTodos } from '../../api/todos';

export const currentPageState = atom({
  key: 'currentPageState',
  default: 1,
});

export const filterTodosState = atom({
  key: 'filterTodosState',
  default: {
    completed: false,
  },
});

// Todos query and atom
export const todosResponseQuery = selector({
  key: 'todosResponseQuery',
  get: async ({ get }) => {
    const { completed } = get(filterTodosState);
    const page = get(currentPageState);

    // Only completed todos
    if (completed) {
      const response = await getTodos({
        page,
        q: '&completed=true',
      }).catch((err) => {
        throw err;
      });
      return response;
    }

    // All todos
    const response = await getTodos({
      page,
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
    return `${text.length}/320`;
  },
});
