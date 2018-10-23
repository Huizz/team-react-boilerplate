const mockUser = {
    name: 'User1'
}

const login = (username: string, password: string) : Promise<any> => {
    return mockLogin()
        .then((user: any) => {
            return Promise.resolve(user);
        });
}

const mockLogin = (): any => {
    return new Promise((resolve, reject) => {
        resolve(mockUser)
    });
}

const userAPI = {
    login
}

export default userAPI;