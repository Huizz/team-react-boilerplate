import * as Koa from 'koa';

import * as Cors from '@koa/cors';
import * as BodyParser from 'koa-bodyparser';
import * as Helmet from 'koa-helmet';
import * as Logger from 'koa-logger';

import router from './routes';

const app: Koa = new Koa();

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
