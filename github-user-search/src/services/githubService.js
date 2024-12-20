import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';
const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

export const fetchUserData = async (username, location, minRepos) => {
  const query = `q=${username}+location:${location}+repos:>${minRepos}`;
  try {
    const response = await axios.get(`${BASE_URL}?${query}`, {
      headers: {
        Authorization: `token ${API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('Looks like we can\'t find the user');
    } else {
      throw new Error('Looks like we can\'t find the user');
    }
  }
};
