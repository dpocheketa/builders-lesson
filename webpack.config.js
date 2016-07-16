 module.exports = {
     entry: './src/webpack.js/script.js',
     output: {
         filename: './public/main.js'
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                  presets: ['es2015']
              }
         }]
     }
 };
