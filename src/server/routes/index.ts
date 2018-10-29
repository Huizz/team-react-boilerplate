import * as Router from 'koa-router';
import userRouter from './user.routes';

const router = new Router();

router.prefix('/v0');
router.get('/health', (ctx, next) => {
  ctx.status = 200;
  ctx.body = 'API endpoint is running'
});

// user specific routes. path defined as /v1/user/
router.use('/users', userRouter.routes(), userRouter.allowedMethods())

export default router;
