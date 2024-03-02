import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjZhZWIxZTYyZjQ2OTM5ZjQ5Njg1OWI1NTlkMzUxMSIsInN1YiI6IjYxZmE4MjcxN2E5N2FiMDA0N2UzYWQzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oE8osp9q4rSoDtAfHbJreXeoJMXj-F9r6ajlFlo3Vg8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common = { Authorization: `bearer ${token}` };

export const apiTrends = async () => {
  return await axios.get('/trending/all/day');
};
export const apiSearch = async query => {
  return await axios.get(`/search/movie?query=${query}`);
};
export const apiDetails = async id => {
  return await axios.get(`/movie/${id}`);
};
export const apiCredits = async id => {
  return await axios.get(`/movie/${id}/credits`);
};
export const apiReviews = async id => {
  return await axios.get(`/movie/${id}/reviews`);
};
