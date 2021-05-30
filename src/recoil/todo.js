import { atom, selector } from 'recoil';

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
