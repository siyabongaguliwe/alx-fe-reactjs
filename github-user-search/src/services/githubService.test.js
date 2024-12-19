import axios from 'axios';
import { fetchUserData } from './githubService';

jest.mock('axios');

describe('fetchUserData', () => {
  it('should fetch user data successfully', async () => {
    const username = 'octocat';
    const userData = { login: 'octocat', name: 'The Octocat' };
    axios.get.mockResolvedValue({ data: userData });

    const result = await fetchUserData(username);

    expect(result).toEqual(userData);
    expect(axios.get).toHaveBeenCalledWith(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`
      }
    });
  });

  it('should throw an error if user is not found', async () => {
    const username = 'unknownuser';
    axios.get.mockRejectedValue(new Error('Looks like we can\'t find the user'));

    await expect(fetchUserData(username)).rejects.toThrow('Looks like we can\'t find the user');
  });
});
