// used when interacting with db
import User from './user.entity';

const mockUsers: User[] = [
    {
        name: 'Apple',
        id: '15'
    },
    {
        name: 'Banana',
        id: '20'
    },
    {
        name: 'Chocolate',
        id: '23'
    },
    {
        name: 'Doughnut',
        id: '24'
    }
];

export const getUser = (name: string): Promise<User> => {
    // @TODO: can be either id or username, match user accordingly.
    const username: string = name;
    return new Promise((resolve, reject) => {
        const user = mockUsers.find(eachUser => {
            return eachUser.name === username;
        });
        setTimeout(() => {
            if (user) {
                resolve(user);
            } else {
                reject({ message: 'Error retrieving user' });
            }
        }, 800);
    });
};

export const getUsers = (): Promise<User[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mockUsers);
        }, 800);
    });
};

const UserModel = {
    getUser,
    getUsers
};

export default UserModel;
