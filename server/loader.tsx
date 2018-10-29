// loads the react app
import { Context } from 'koa';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
// import Helmet from 'react-helmet';
// import * as Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { state } from 'services/reducer';

import * as fs from 'fs';
import * as path from 'path';

import StaticApp from 'StaticApp';

const configureStore = () => {
    return createStore(
        state,
        compose(
            applyMiddleware(reduxThunk)
        )
    )
}

const loader = async (ctx: Context, next: any) => {
    await readFile(ctx); // readFile is async
}

const readFile = (ctx: Context) => {
    return new Promise((resolve, reject) => {
        const filePath = path.resolve('build/index.html'); // get compiled index page
        fs.readFile(filePath, 'utf8', (err, htmlData) => {
            if (err) {
                console.error('read err', err)
                ctx.status = 404
                // @TODO: check if this is the correct method
                reject(ctx);
            }
            const store = configureStore()
            const staticContext = {};
            const markup = renderToString(
                <Provider store={store}>
                    <StaticRouter
                        location={ctx.url}
                        context={staticContext}
                    >
                        <StaticApp />
                    </StaticRouter>
                </Provider>
            );

            // send the response
            const RenderedApp = htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${markup}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
            );
            ctx.status = 200;
            ctx.type = 'html';
            ctx.body = RenderedApp;
            resolve(ctx);
        })
    })
}
export default loader