import userAPI from './user.api';

enum actions {
    LOGIN,
    LOGOUT,
    SIGNUP
}

export default actions;

export const login = (username: string, password: string) => async (dispatch:any) => {
    const user = await userAPI.login(username, password)
    dispatch(handleLoginComplete(user));
}

const handleLoginComplete = (user: any) => ({
    payload: user,
    type: actions.LOGIN
})