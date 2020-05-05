const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/index.tsx', 'webpack-hot-middleware/client'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    devtool: 'source-map',
    resolve: {
      modules: [path.resolve(__dirname, "."), "node_modules"],
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            {
                test:/\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?name=asset/[name].[ext]?[hash]',
                ]
            },
            // {
            //     test: /\.(jpe?g|png)$/i,
            //     use: {
            //         loader: 'url-loader'
            //     }
            // },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
        new webpack.HotModuleReplacementPlugin()
    ]
}