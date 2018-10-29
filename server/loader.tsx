// loads the react app

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

import { StaticApp } from 'App';

const configureStore = () => {
    return createStore(
        state,
        compose(
            applyMiddleware(reduxThunk)
        )
    )
}

const loader = (req : any, res : any) => {
    const filePath = path.resolve('build/index.html'); // get compiled index page
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('read err', err)
            return res.status(404).end()
        }
        const context = {
            url: ''
        }
        const store = configureStore()
        const markup = renderToString(
            <Provider store={store}>
                <StaticRouter
                    location={req.url}
                    context={context}
                >
                    <StaticApp />
                </StaticRouter>
            </Provider>
        );

        if (context.url) {
            // Somewhere a `<Redirect>` was rendered
            res.redirect(301, context.url)
        } else {
            // we're good, send the response
            const RenderedApp = htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${markup}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
              );
            res.send(RenderedApp)
        }
    })
}
 export default loader