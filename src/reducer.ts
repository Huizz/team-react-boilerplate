// overall reducers for the app
import { combineReducers } from 'redux';

import UserReducer, * as userFunctions from 'services/user/reducer';

export interface IState {
    user: any
}

export const state = combineReducers<IState> ({
    user: UserReducer
});

export const getLoggedInState = (currentState: IState) => {
    return userFunctions.getLoggedInState(currentState.user);
}

export const getUserObject = (currentState:  IState) => {
    return userFunctions.getUserObject(currentState.user);
}