import userAPI from './api';

const actions = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LGOOUT',
    SIGNUP: 'SIGNUP'
}

export default actions;

export const login = (username: string, password: string) => (dispatch:any) => {
    userAPI.login(username, password)
        .then((user) => {
            dispatch(handleLoginComplete(user));
        })
}

const handleLoginComplete = (user: any) => ({
    payload: user,
    type: actions.LOGIN
})