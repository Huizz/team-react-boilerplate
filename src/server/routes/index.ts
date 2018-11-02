import Router from 'koa-router';
import clientRouter from './client.route';
import userRouter from './user.routes';

const router = new Router();

router.get('/api/health', (ctx, next) => {
    ctx.status = 200;
    ctx.body = 'API endpoint is running'
  });

// // user specific routes. path defined as /v1/user/
router.use('/api/users', userRouter.routes(), userRouter.allowedMethods())
router.use('/client', clientRouter.routes(), clientRouter.allowedMethods())

export default router;
