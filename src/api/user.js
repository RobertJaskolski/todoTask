import { client } from './index';
import { DEFAULT_USER } from '../consts';
// Get user
export const getUser = ({ user }) =>
  client({
    endpoint: '/users',
    query: `?email=${user.email}`,
  }).then((res) => {
    return res.data;
  });

// POST new user
export const addUser = ({ user }) => {
  client({
    endpoint: `/users`,
    options: {
      method: 'POST',
      body: JSON.stringify({ status: 'Active', ...user }),
    },
  }).then((res) => {
    if (res.code === 201 || res.code === 200) return res.data[0];
    else return user;
  });
};

// UPDATE USER
export const updateUser = ({ newUserInfo, user }) => {
  client({
    endpoint: `/users/${user.id}`,
    options: {
      method: 'PATCH',
      body: JSON.stringify(newUserInfo),
    },
  }).then((res) => {
    if (res.code === 204 || res.code === 200) return res.data[0];
    else return user;
  });
};

// CHECK USER
export const handleCheckUser = async ({ user = DEFAULT_USER }) => {
  let checkUser = await getUser({ user });
  if (checkUser?.length === 0) {
    checkUser = await addUser({ user });
    return checkUser;
  }
  if (checkUser[0].name !== user.name) {
    checkUser = await updateUser({ newUserInfo: user, user: checkUser[0] });
    return checkUser;
  }
  return checkUser;
};
