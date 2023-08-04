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
export const postGameToCollection = (userId, collectionName, gameId) =>
  makeRequest(`/collections/games`, 'POST', {userId, collectionName, gameId});
export const fetchUser = (data) =>
  makeRequest(`/users?email=${data.email}`, 'GET');
export const fetchGPTData = (games) =>
  makeRequest(`/gpt`, 'POST', games);

export const postNewUser = (data) =>
  makeRequest(`/users`, 'POST', data)
  .catch((error) => {
    console.error('Error while posting new user:', error);
    throw error;
  })

export const createCollection = (name, userId) =>
  makeRequest('/collections', 'POST', { userId, name });