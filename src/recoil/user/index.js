import { atom, selector, selectorFamily } from 'recoil';
import { handleCheckUser } from '../../utils';
import { getUser } from '../../api/user';
import { DEFAULT_USER } from '../../consts';

export const getUserQuery = selectorFamily({
  key: 'getUserQuery',
  get:
    (id) =>
    async ({ get }) => {
      const user = await getUser({ id });
      return user;
    },
});

export const checkUserQuery = selector({
  key: 'checkUserQuery',
  get: async ({ get }) => {
    const newUser = get(newUserState);
    const user = await handleCheckUser({ user: newUser });
    return user;
  },
});

export const userState = atom({
  key: 'userState',
  default: checkUserQuery,
});

export const newUserState = atom({
  key: 'newUserState',
  default: DEFAULT_USER,
});
