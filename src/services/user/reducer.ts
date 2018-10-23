import actions from './actions';

interface IUserState {
    isLoggedIn: boolean,
    user: any
}

const initialState: IUserState = {
    isLoggedIn: false,
    user: {},
}

const UserReducer = (state: IUserState = initialState, action: any) => {
    switch(action.type) {
        case actions.LOGIN:
            return handleLogin(state, action.payload);
        default:
            return state;
    }
}

const handleLogin = (state: any, payload: any) => {
    return {
        isLoggedIn: true,
        user: payload
    };
}

export const getLoggedInState = (state: any): boolean => {
    return state.isLoggedIn;
}

export const getUserObject = (state: any) : IUserState => {
    return state.user;
}

export default UserReducer;