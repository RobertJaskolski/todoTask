import { atom, selector } from 'recoil';

export const newTaskTextState = atom({
  key: 'newTaskTextState',
  default: '',
});
