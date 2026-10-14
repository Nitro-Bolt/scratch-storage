const path = require('path');

const base = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(png|svg|wav)$/,
                type: 'asset/bytes'
            }
        ]
    },
    plugins: []
};

module.exports = [
    // Web-compatible
    Object.assign({}, base, {
        target: 'web',
        entry: {
            'scratch-storage': './src/index.js',
            'scratch-storage.min': './src/index.js'
        },
        output: {
            clean: true,
            library: {
                name: 'ScratchStorage',
                type: 'umd'
            },
            path: path.resolve('dist', 'web'),
            filename: '[name].js'
        }
    }),

    // Node-compatible
    Object.assign({}, base, {
        target: 'node',
        entry: {
            'scratch-storage': './src/index.js'
        },
        output: {
            clean: true,
            library: {
                type: 'commonjs2'
            },
            path: path.resolve('dist', 'node'),
            filename: '[name].js'
        },
        externalsType: 'commonjs',
        externals: ['base64-js', 'js-md5', 'localforage', 'text-encoding']
    })
];
