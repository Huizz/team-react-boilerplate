import * as Router from 'koa-router';
import UserRouter from './user/user.routes';

const RootRouter: Router = new Router();
RootRouter.use(UserRouter.routes(), UserRouter.allowedMethods());

export default RootRouter;
