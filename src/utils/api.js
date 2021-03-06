import fetch from 'isomorphic-fetch';

const baseURL = 'https://api.github.com';

const api = {
  users: {
    async listUser(user = 'jgalianoz') {
      const response = await fetch(`${baseURL}/users/${user}`)
      const value = await response.json();
      return value;
    }
  },
  repository: {
    async listRepos(user) {
      const response = await fetch(`${baseURL}/users/${user}/repos`)
      const value = await response.json();
      return value;
    }
  },
  followers: {
    async listFollowers(user) {
      const response = await fetch(`${baseURL}/users/${user}/followers`)
      const value = await response.json();
      return value;
    }
  },
  following: {
    async listFollowings(user) {
      const response = await fetch(`${baseURL}/users/${user}/following`)
      const value = await response.json();
      return value;
    }
  },

}

export default api;
