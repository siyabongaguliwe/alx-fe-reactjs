import axios from 'axios';
import { fetchUserData } from './githubService';

jest.mock('axios');

describe('fetchUserData', () => {
  it('should fetch user data successfully', async () => {
    const username = 'octocat';
    const location = 'San Francisco';
    const minRepos = 10;
    const userData = { login: 'octocat', name: 'The Octocat' };
    axios.get.mockResolvedValue({ data: userData });

    const result = await fetchUserData(username, location, minRepos);

    expect(result).toEqual(userData);
    expect(axios.get).toHaveBeenCalledWith(`https://api.github.com/search/users?q=${username}+location:${location}+repos:>${minRepos}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`
      }
    });
  });

  it('should throw an error if user is not found', async () => {
    const username = 'unknownuser';
    const location = 'unknown';
    const minRepos = 0;
    axios.get.mockRejectedValue(new Error('Looks like we can\'t find the user'));

    await expect(fetchUserData(username, location, minRepos)).rejects.toThrow('Looks like we can\'t find the user');
  });
});
