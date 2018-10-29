import * as Router from 'koa-router';
import UserController from '../model/user/user.controller';
import assetRouter from './asset.route';

const userRouter = new Router();
userRouter.get('/:userId', UserController.getUser)
userRouter.get('/', UserController.getUsers)
// get user's assets
userRouter.use('/assets', assetRouter.routes(), assetRouter.allowedMethods());

export default userRouter