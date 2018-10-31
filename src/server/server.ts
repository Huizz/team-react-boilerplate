import Koa from 'koa';

import Cors from '@koa/cors';
import BodyParser from 'koa-bodyparser';
import Helmet from 'koa-helmet';
import Logger from 'koa-logger';

import { errorMiddleware } from 'server/middlewares';

import router from './routes';

const app: Koa = new Koa();

app.use(errorMiddleware);

app.use(Helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(Logger())
}

app.use(Cors())
app.use(BodyParser({
  enableTypes: ['json'],
  jsonLimit: '5mb',
  strict: true,
  onerror: (err, ctx) => {
    ctx.throw('body parse error', 422)
  }
}));

app.use(router.routes())
app.use(router.allowedMethods())

export default app;
