import Router from 'koa-router';
import AssetController from '../model/asset/asset.controller';

const assetRouter = new Router();
assetRouter.get('/:id', AssetController.getAsset)

export default assetRouter