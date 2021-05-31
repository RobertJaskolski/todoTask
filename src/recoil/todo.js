import { atom, selector } from 'recoil';
import { getTodo } from '../api/todos';

export const newTaskTextState = atom({
  key: 'newTaskTextState',
  default: '',
});

export const counterCharsQuery = selector({
  key: 'counterCharsQuery',
  get: ({ get }) => {
    return `${get(newTaskTextState).length}/320`;
  },
});

export const currentTaskIDState = atom({
  key: 'currentTaskIDState',
  default: 1,
});

export const taskQuery = selector({
  key: 'taskQuery',
  get: async ({ get }) => {
    const id = get(currentTaskIDState);
    const response = await getTodo({ id }).catch((err) => {
      throw err;
    });
    return response;
  },
});

export const taskState = atom({
  key: 'taskState',
  default: taskQuery,
});
