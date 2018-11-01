import { Context } from 'koa';
import { formatError } from 'server/utils/validator/errorManager';

type NextFunction = () => any;

export const errorMiddleware = async (ctx: Context, next: NextFunction) => {
    try {
        await next();
    } catch (err) {
        const errorToBeReturned = formatError(err);
        console.log(errorToBeReturned);
        ctx.status = err.httpCode || 500;
        ctx.body = errorToBeReturned;
    }
};
