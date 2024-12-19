import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';
const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`, {
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
