// import * as md5file from 'md5-file';
// import * as path from 'path';

// import * as ignoreStyles from 'ignore-styles';

// const register = ignoreStyles.default;
// const extensions = ['.gif', '.jpeg', '.jpg', '.png', '.svg'];

// // Override the default style ignorer, also modifying all image requests
// register(ignoreStyles.DEFAULT_EXTENSIONS, (mod, filename) => {
//     if (!extensions.find(f => filename.endsWith(f))) {
//         // If we find a style
//         return ignoreStyles.noOp();
//     } else {
//         // If we find an image
//         const hash = md5file.sync(filename).slice(0, 8);
//         const bn = path.basename(filename).replace(/(\.\w{3})$/, `.${hash}$1`);

//         mod.exports = `/static/media/${bn}`;
//     }
// });

// require('@babel/polyfill');
// require('@babel/register')({
//     ignore: [/\/(build|node_modules)\//],
//     plugins: [
//         '@babel/plugin-syntax-dynamic-import',
//         'dynamic-import-node',
//         'react-loadable/babel'
//     ],
//     presets: ['@babel/preset-env', '@babel/preset-react']
// });

// // Now that the nonsense is over... load up the server entry point
// require('./server');