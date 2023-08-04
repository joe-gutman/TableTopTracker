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
export const postGameToCollection = (collectionId, gameId) =>
  makeRequest(`/collections/${collectionId}/games`, 'POST', {collectionId, gameId});
export const fetchUser = (data) =>
  makeRequest(`/users?email=${data.email}`, 'GET');

export const postNewUser = (data) =>
  makeRequest(`/users`, 'POST', data)
  .catch((error) => {
    console.error('Error while posting new user:', error);
    throw error;
  })
