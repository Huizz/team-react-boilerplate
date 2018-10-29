
// import * as express from 'express';
import * as Koa from 'koa';
import * as BodyParser from 'koa-bodyparser';
import * as Router from 'koa-router';
import * as serve from 'koa-static-server';
import * as Loadable from 'react-loadable';

import loader from './loader';

const app = new Koa();
const port = process.env.PORT || 3003
const router = new Router();

router.get('*', loader)

app.use(BodyParser({
    enableTypes: ['json'],
    jsonLimit: '5mb',
    strict: true,
    onerror(err, ctx) {
        ctx.throw('body parse error', 422)
    }
}));

// serve static files
app.use(serve({ rootDir: 'build/static', rootPath: '/static' }))

app.use(router.routes());
app.use(router.allowedMethods());
app.use(loader);
// app.use('express.static('build'))

Loadable.preloadAll().then(() => {
    app.listen(port, () => { console.log(`App listening on port ${port}!`) });
});

// build the app first
// then build the server file
// then serve the server file
