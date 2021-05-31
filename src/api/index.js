const url = 'https://gorest.co.in/public-api';
const API_KEY = process.env.REACT_APP_API_KEY;

export const client = ({ endpoint, query = '', options = {} }) => {
  return fetch(`${url}/${endpoint}${query}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...options,
  })
    .then((res) => {
      if (res.ok) return res.json();
      if (!res.ok) return Promise.reject(`Error HTTP status: ${res.status}`);
    })
    .catch((error) => {
      return Promise.reject(`Network error: ${error}`);
    });
};
