import { Context } from 'koa';

import UserController from './user.controller';
import UserModel from './user.model';

describe('User controller tests', () => {

    test('should call user.model with id', async () => {
        const modelSpy = jest.spyOn(UserModel, 'getUser');
        const mockContext: Context = { params: { id: '15' }, throw: () => jest.fn() } as Context;

        await UserController.getUser(mockContext);
        expect(modelSpy).toHaveBeenCalled();
    })
})
