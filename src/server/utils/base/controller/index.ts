import { Context } from 'koa';
import Validator from 'server/utils/validator';

export default class BaseController {
  
  public validator: Validator;
  public ctx: Context;

  constructor(type: string = 'Controller', ctx: Context) {
    this.validator = new Validator(type);
    this.ctx = ctx;
  }

  public sendToClient(body: object, message = 'success'): void {
    this.ctx.status = 200
    this.ctx.body = {
      resultCode: 1,
      message,
      body
    };
  }

};