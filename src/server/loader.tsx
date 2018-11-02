// loads the react app
import { Context } from 'koa';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

// import * as Loadable from 'react-loadable';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { state } from 'app/services/reducer';

import * as fs from 'fs';
import * as path from 'path';

import StaticApp from 'app/StaticApp';

/*
    NOTE: if the server side rendered page has to be the component that updates the redux state.,
    can store the server redux state in the script variable ie. __SERVER_REDUX_STATE__
    then the redux store in the client side has to take note of changes to this server redux state.

    ref: https://medium.com/bucharestjs/adding-state-management-with-redux-in-a-cra-srr-project-9798d74dbb3b
*/
const configureStore = () => {
    return createStore(
        state,
        compose(
            applyMiddleware(reduxThunk)
        )
    )
}
const store = configureStore();

const loader = async (ctx: Context, next: any) => {
    await readFile(ctx); // readFile is async
}

const readFile = (ctx: Context) => {
    return new Promise((resolve, reject) => {
        const filePath = path.resolve('build/app/index.html'); // get compiled index page
        fs.readFile(filePath, 'utf8', (err, htmlData) => {
            if (err) {
                console.error('read err', err)
                ctx.status = 404
                // @TODO: check if this is the correct method
                reject(ctx);
            }
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

            const helmet = Helmet.renderStatic(); // @TODO: not getting the child component title for login page

            // send the response
            const RenderedApp = htmlData
              .replace('<div id="root"></div>', `<div id="root">${markup}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`)
              .replace(/<title>.*?<\/title>/g, helmet.title.toString())

            ctx.status = 200;
            ctx.type = 'html';
            ctx.body = RenderedApp;
            // console.log(RenderedApp, 'RenderedApp');
            resolve(ctx);
        })
    })
}
export default loader