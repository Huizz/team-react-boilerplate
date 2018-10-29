import { Context } from 'koa';
import UserModel from './user.model';

class UserController {
  public static getUser = async (ctx: Context) => {
    const user = await UserModel.getUser(ctx.params.userId)
      .catch((error) => {
        ctx.throw(500, error.message) // @TODO: this message is not being exposed to user
      });
    ctx.status = 200;
    ctx.body = user;
  }

  public static getUsers = async (ctx: Context) => {
    const users = await UserModel.getUsers();
    ctx.status = 200;
    ctx.body = users;
  }
}

export default UserController;
