import { selectorFamily, atom, selector } from 'recoil';
import { handleCheckUser, localStorageEffect } from '../../utils';
import { getUser } from '../../api/user';
import { DEFAULT_USER } from '../../consts';

// Get current user
export const newDataUserState = atom({
  key: 'newDataUserState',
  default: DEFAULT_USER,
  effects_UNSTABLE: [localStorageEffect('current_user')],
});

export const currentUserQuery = selector({
  key: 'getCurrentUserQuery',
  get: async ({ get }) => {
    const userData = get(newDataUserState);
    const user = await handleCheckUser({ user: userData });
    return user;
  },
});

export const currentUserState = atom({
  key: 'currentUserState',
  default: currentUserQuery,
});

// Get information about user - task details
export const getUserQuery = selectorFamily({
  key: 'getUserQuery',
  get:
    (id) =>
    async ({ get }) => {
      const user = await getUser({ id });
      return user;
    },
});
