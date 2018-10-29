// used when interacting with db
import Asset from './asset.entity';

const mockAssets: Asset[] = [
    {
        type: 'Vehicle',
        id: '1',
        user: '15'
    },
    {
        type: 'House',
        id: '2',
        user: '20'
    }
];

export const getAsset = (id: string): Promise<Asset> => {
    return new Promise((resolve, reject) => {
        // let user: User;
        const asset = mockAssets.find(eachAsset => {
            return eachAsset.id === id;
        });
        setTimeout(() => {
            if (asset) {
                resolve(asset);
            } else {
                reject({ message: 'Error retrieving asset' });
            }
        }, 800);
    });
};
