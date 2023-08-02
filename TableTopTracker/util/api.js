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
  makeRequest(`/users?uid=${data.uid}`, 'GET');

export const postNewUser = (data) =>
  makeRequest(`/users`, 'POST', data);
