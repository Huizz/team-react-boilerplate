import Router from 'koa-router';
import UserController from 'server/model/user/user.controller';
import assetRouter from './asset.route';

const userRouter = new Router();

userRouter.get('/:username', async context => {
    const controller = new UserController(context);
    await controller.getUser();
});

userRouter.get('/', async context => {
    const controller = new UserController(context);
    await controller.getUsers();
});

// get user's assets
userRouter.use('/assets', assetRouter.routes(), assetRouter.allowedMethods());

export default userRouter;
