const path = require('path');
let appPaths = require('./tasks/settings');

let root = path.resolve(__dirname, '.');
console.log(root);

let src = `${root}/src`;
let entry = `${src}/index.tsx`;
let output = `${root}/${appPaths.paths.publish.scripts}`;

module.exports = {
    //context: __dirname,
    entry: entry,
    output: {
        filename: 'bundle.js',
        path: output,
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    target: 'web',
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }, {
            test: /\.tsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: 'ts-loader'
        }]
    }
};