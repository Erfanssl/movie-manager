const path = require('path');
const MiniCssExtract = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    return  {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    use: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                }, {
                    test: /\.s?css$/,
                    use: [
                        'style-loader',
                        MiniCssExtract.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtract({
                filename: 'style.css'
            })
        ],
        devtool: isProduction ? "source-map" : "inline-source-map",
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
            historyApiFallback: true
        }
    }
};
