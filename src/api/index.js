const url = 'https://gorest.co.in/public-api';

export const client = ({ endpoint, query = '', options = {} }) => {
  return fetch(`${url}/${endpoint}${query}`, options)
    .then((res) => {
      if (res.ok) return res.json();
      if (!res.ok) return Promise.reject(`Error HTTP status: ${res.status}`);
    })
    .catch((error) => {
      return Promise.reject(`Network error: ${error}`);
    });
};
