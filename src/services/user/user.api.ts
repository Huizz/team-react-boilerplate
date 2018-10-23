const mockUser = {
  name: 'User1'
};

const login = async (username: string, password: string): Promise<any> => {
  const user = await mockLogin();
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
