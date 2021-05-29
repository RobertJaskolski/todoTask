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

export const tasksStats = selector({
  key: 'tasksStats',
  get: ({ get }) => {
    const { tasksList } = get(tasksState);
    const totalNum = tasksList.length;
    const totalCompletedNum = tasksList.filter((item) => item.completed).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    return {
      totalCompletedNum,
      totalUncompletedNum,
    };
  },
});
