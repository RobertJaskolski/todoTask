import { atom, selector } from 'recoil';
import { getTodos } from '../api/todos';

export const currentPageState = atom({
  key: 'currentPageState',
  default: 1,
});

export const filterState = atom({
  key: 'filterState',
  default: false,
});

export const tasksQuery = selector({
  key: 'tasksQuery',
  get: async ({ get }) => {
    let response;
    if (get(filterState)) {
      response = await getTodos({
        page: get(currentPageState),
        q: '&completed=true',
      }).catch((err) => {
        throw err;
      });
    }
    if (!get(filterState)) {
      response = await getTodos({ page: get(currentPageState) }).catch(
        (err) => {
          throw err;
        }
      );
    }
    return response;
  },
});

export const tasksState = atom({
  key: 'tasksState',
  default: tasksQuery,
});
