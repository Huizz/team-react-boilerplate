import axios from 'axios';

const login = async (username: string, password: string): Promise<any> => {
  const userResponse = await axios.get(`/v0/users/${username}`);
  const user = userResponse.data.body;

  return user;
};

const userAPI = {
  login
};

export default userAPI;
