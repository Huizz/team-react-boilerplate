import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as Loadable from 'react-loadable';

import loader from './loader';

const app = express();
const port = process.env.PORT || 3003

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.Router().get('/', loader));
app.use(loader);

Loadable.preloadAll().then(() => {
    app.listen(port, () => {console.log(`App listening on port ${port}!`)});
});

// build the app first
// then build the server file
// then serve the server file
