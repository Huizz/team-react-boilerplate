import axios from 'axios';
// import * as dotenv from 'dotenv';

const login = async (username: string, password: string): Promise<any> => {
  const userResponse = await axios.get(`${process.env.REACT_APP_API_URL}/v0/users/${username}`);
  const user = userResponse.data.body;

  return user;
};

const userAPI = {
  login
};

export default userAPI;
