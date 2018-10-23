import userAPI from './user.api';

interface IStringsOnly {
    [key: string]: string
}

const actions: IStringsOnly = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LGOOUT',
    SIGNUP: 'SIGNUP'
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