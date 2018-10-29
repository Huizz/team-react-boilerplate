import { Context } from 'koa';
import { getAsset } from './asset.model';

class AssetController {
  public static getAsset = async (ctx: Context) =>{
    const asset = await getAsset(ctx.params.id)
        .catch((error) => {
            ctx.throw(500, error.message)
        });

    ctx.status = 200;
    ctx.body = asset;
  }
}

export default AssetController;
