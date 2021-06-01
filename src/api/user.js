import { client } from './index';
// Get user
export const getUser = ({ id }) =>
  client({
    endpoint: `/users/${id}`,
  }).then((res) => {
    return res.data;
  });

export const getUserByEmail = ({ user }) =>
  client({
    endpoint: `/users`,
    query: `?email=${user.email}`,
  }).then((res) => {
    return res.data;
  });

// POST new user
export const addUser = ({ user }) =>
  client({
    endpoint: `/users`,
    options: {
      method: 'POST',
      body: JSON.stringify({ status: 'Active', ...user }),
    },
  }).then((res) => {
    if (res.code === 201 || res.code === 200) return res.data;
    else return user;
  });

// UPDATE USER
export const updateUser = ({ newUserInfo, user }) =>
  client({
    endpoint: `/users/${user.id}`,
    options: {
      method: 'PATCH',
      body: JSON.stringify(newUserInfo),
    },
  }).then((res) => {
    if (res.code === 204 || res.code === 200) {
      return res.data;
    } else return user;
  });
