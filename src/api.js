import fetch from 'isomorphic-fetch';

const baseURL = 'https://api.github.com';

const api = {
  users: {
    async listUser() {
      const response = await fetch(`${baseURL}/users/jgalianoz`)
      const value = await response.json();
      return value;
    }
  }
}

export default api;
