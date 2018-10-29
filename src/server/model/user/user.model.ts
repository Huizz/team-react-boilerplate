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

export const getUser = (id: string): Promise<User> => {
    const userid: string = id;
    return new Promise((resolve, reject) => {
        const user = mockUsers.find(eachUser => {
            return eachUser.id === userid;
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
