import actions from './user.actions';

export interface IUserState {
    isLoggedIn: boolean,
    user: any
}

interface IAction {
    type: number,
    payload: any
}

export const initialState: IUserState = {
    isLoggedIn: false,
    user: {},
}

const UserReducer = (state: IUserState = initialState, action: IAction): IUserState => {
    switch(action.type) {
        case actions.LOGIN:
            return { ...state, 
                isLoggedIn: true, 
                user: action.payload 
            }
        default:
            return state;
    }
}

export default UserReducer;