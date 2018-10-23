import actions from './user.actions';

export interface IUserState {
    isLoggedIn: boolean,
    user: any
}

const initialState: IUserState = {
    isLoggedIn: false,
    user: {},
}

const UserReducer = (state: IUserState = initialState, action: any): IUserState => {
    switch(action.type) {
        case actions.LOGIN:
            return { ...state, isLoggedIn: true, user: action.payload }
        default:
            return state;
    }
}

export default UserReducer;