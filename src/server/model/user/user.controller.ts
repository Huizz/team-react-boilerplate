import { Context } from 'koa';
import UserModel from './user.model';

import BaseController from 'server/utils/base/controller';

class UserController extends BaseController {

  constructor(ctx: Context) {
    super('User Controller', ctx);
  }

  public getUser = async () => {
    const user = await UserModel.getUser(this.ctx.params.username);
    this.sendToClient(user);
  }

  public getUsers = async () => {
    const users = await UserModel.getUsers();
    this.sendToClient(users);
  }

}

export default UserController;
