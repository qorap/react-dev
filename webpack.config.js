module.exports = {
    entry: './src/App.jsx',

    output: {
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};