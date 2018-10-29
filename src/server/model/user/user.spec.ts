import { Context } from 'koa';

import UserController from './user.controller';
import UserModel from './user.model';

describe('User controller tests', () => {

    let controller;
 
    test('should call user.model with id', async () => {
        const modelSpy = jest.spyOn(UserModel, 'getUser');
        const mockContext: Context = { params: { userId: '15' }, throw: () => jest.fn() } as Context;

        controller = new UserController(mockContext);

        await controller.getUser();
        expect(modelSpy).toHaveBeenCalled();
        modelSpy.mockRestore();
    })
})
