import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as compress from 'koa-compress';
import * as cors from 'koa2-cors';

import RootRouter from './routes';

const app: Koa = new Koa();

app
    .use(cors({ origin: '*' }))
    .use(compress())
    .use(bodyParser())
    .use(RootRouter.routes())
    .use(RootRouter.allowedMethods());

app.listen(3000);
