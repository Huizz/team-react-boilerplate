import Router from 'koa-router';
import loader from '../loader';

const clientRouter = new Router();

// redirect all requests for client pages to loader
clientRouter.get('*', loader)
// clientRouter.get('/client/*', loader)

export default clientRouter;
