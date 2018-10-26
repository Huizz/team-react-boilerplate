import { IAction } from 'app/utils/interfaces';
import types from './user.types';

export interface IUserState {
    isLoggedIn: boolean;
    user: any;
}

const initialState: IUserState = {
    isLoggedIn: false,
    user: {}
};

const UserReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            };
        default:
            return state;
    }
};

export default UserReducer;
