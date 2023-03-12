const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.join(__dirname, "/babeljs"),
    //THIS DESCRIBE THE PATH YOU WANT YOU IMAGES TO GO TO
    assetModuleFilename: "img/[name].[ext]",
    //saves the name of the js file with the entry name above
    filename: `[name].js`,
  },
  // devServer: {
  //   historyApiFallback: {
  //     rewrites: [{ from: /./, to: "projects/learn_route/index.php" }],
  //   },
  // },

  devtool: "source-map",
  // stats: {
  //   errors: true, //This is an object that allows spitting error into console
  // },
  watchOptions: {
    poll: 200, // Check for changes every 0 second
    ignored: /node_modules/, // Ignore changes in the node_modules directory
  },

  module: {
    rules: [
      {
        test: /\.js$/, //This ask it ro search for any js file in directory
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", //This is a loader for babel compiler
          options: {
            presets: ["@babel/preset-env"], //This is an important babel preset also installed in package.json and included in .babelrc
          },
        },
      },
      //This is to handle css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        //This is to search for an image with ext or .....
        test: /\.(png|jpg|gif|jpeg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/html/index.html",
      inject: false,
      scriptLoading: "blocking",
      chunks: ["index"],
    }),
    // Add as many configurations as needed
  ],
};
