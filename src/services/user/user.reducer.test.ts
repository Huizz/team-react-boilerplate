import actions from './user.actions';
import UserReducer, { IUserState } from './user.reducer';

describe('UserReducer', () => {
    it('should return updateState of user login given LOGIN action', () => {
        const ACTION = {
            payload: 'USER 1',
            type: actions.LOGIN
        };

        const PREVIOUS_STATE: IUserState = {
            isLoggedIn: false,
            user: {}
        };

        const EXPECTED_STATE: IUserState = {
            isLoggedIn: true,
            user: 'USER 1'
        };

        const reducer = UserReducer(PREVIOUS_STATE, ACTION);
        expect(reducer).toEqual(EXPECTED_STATE);
    });
});
