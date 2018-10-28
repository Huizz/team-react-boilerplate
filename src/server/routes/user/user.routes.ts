import * as Router from 'koa-router';

const UserRouter: Router = new Router();

UserRouter.get('/user', async ctx => {
    ctx.status = 200;
    ctx.body = { name: 'user from server' };
});

export default UserRouter;
