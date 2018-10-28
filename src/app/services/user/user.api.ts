import axios from 'axios';

const mockUser = {
  name: 'User1'
};

const login = async (username: string, password: string): Promise<any> => {
  const userOld = await mockLogin(); // use setTimeout to mimic async function
  const userResponse = await axios.get('/user');
  const user = userResponse.data
  console.log(userOld);
  return user;
};

const mockLogin = (): any => {
  return new Promise((resolve, reject) => {
    resolve(mockUser);
  });
};

const userAPI = {
  login
};

export default userAPI;
