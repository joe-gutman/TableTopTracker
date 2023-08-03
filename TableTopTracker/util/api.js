import axios from 'axios';
const baseURL = 'http://127.0.0.1:3000';
const makeRequest = (url, method, data) =>
  axios({
    url: baseURL+url,
    method,
    data,
    headers: {}
  });
export const fetchUserCollections = (userId) =>
  makeRequest(`/collections?userId=${userId}`, 'GET');
export const fetchCollectionGames = (collectionId) =>
  makeRequest(`/collections/${collectionId}`, 'GET');
export const fetchUser = (data) =>
<<<<<<< HEAD
  makeRequest(`/users?email=${data.email}`, 'GET');
=======
  makeRequest(`/users?uid=${data.uid}`, 'GET');

>>>>>>> 134fa6e77cf742a37185c96b1e091947dadbf8fc
export const postNewUser = (data) =>
  makeRequest(`/users`, 'POST', data)
  .catch((error) => {
    console.error('Error while posting new user:', error);
    throw error;
<<<<<<< HEAD
  })
=======
  })
>>>>>>> 134fa6e77cf742a37185c96b1e091947dadbf8fc
