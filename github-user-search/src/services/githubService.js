// src/services/githubService.js
import axios from 'axios';

const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    const query = `q=${username}+location:${location}+repos:>${minRepos}`;
    const response = await axios.get(`https://api.github.com/search/users?${query}`, {
      headers: {
        Authorization: `token ${GITHUB_API_KEY}`
      }
    });
    return response.data.items;
  } catch (error) {
    throw new Error('User not found');
  }
};
