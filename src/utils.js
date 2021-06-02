import { DefaultValue } from 'recoil';
import { getUserByEmail, addUser, updateUser } from './api/user';
import { DEFAULT_USER } from './consts';

// Parse Date to string in format "DD/MM/YYYY HH:mm"
export const handleDateToString = (stringDate) => {
  const date = new Date(stringDate);

  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const month =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const minutes =
    date.getMinutes() + 1 > 9
      ? date.getMinutes() + 1
      : `0${date.getMinutes() + 1}`;

  return `${day}/${month}/${date.getFullYear()} ${hours}:${minutes}`;
};

// CHECK USER
export const handleCheckUser = async ({ user = DEFAULT_USER }) => {
  const checkUser = await getUserByEmail({ user });

  if (checkUser?.length === 0) {
    const response = await addUser({ user });
    return response;
  }

  if (checkUser[0].name !== user.name || checkUser[0].gender !== user.gender) {
    const response = await updateUser({
      newUserInfo: user,
      user: checkUser[0],
    });
    return response;
  }

  return checkUser[0];
};

// LocalStorage Persist (User)
export const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue) => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };
