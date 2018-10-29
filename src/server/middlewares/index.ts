import { Context } from 'koa';
import { formatError } from 'server/utils/validator/errorManager';

export const errorMiddleware = async (ctx: Context, next: () => any) => {
    try {
        await next();
    } catch (err) {
        const errorToBeReturned = formatError(err);
        ctx.status = err.httpCode || 500;
        ctx.body = errorToBeReturned;
    }
};