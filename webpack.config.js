const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

// replace localhost with 0.0.0.0 if you want to access
// your app from wifi or a virtual machine
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;
const sourcePath = path.join(__dirname, './app');
const buildDirectory = path.join(__dirname, './build');

const stats = {
  assets: true,
  children: false,
  chunks: false,
  hash: false,
  modules: false,
  publicPath: false,
  timings: true,
  version: false,
  warnings: true,
  colors: {
    green: '\u001b[32m',
  },
};

module.exports = function(env) {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = nodeEnv === 'production';

  const serviceWorkerBuild = env && env.sw;

  let cssLoader;

  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      async: true,
      children: true,
      minChunks: 2,
    }),

    // setting production environment will strip out
    // some of the development code from the app
    // and libraries
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),

    // create css bundle
    new ExtractTextPlugin('posapplication.css'),
    //new ExtractTextPlugin("application.css"),
    
    // create index.html
    new HtmlWebpackPlugin({
      template: './index.ejs',
      inject: true,
      production: isProd,
      minify: isProd && {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),

    // make sure script tags are async to avoid blocking html render
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),

    // preload chunks
    new PreloadWebpackPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          autoprefixer,
          precss
        ]
      }
    })
  ]; //EOF plugins

  if (isProd) {
    plugins.push(
      // minify remove some of the dead code
      new UglifyJSPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
      })
    );

    cssLoader = ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            module: true, // css-loader 0.14.5 compatible
            modules: true,
            localIdentName: '[hash:base64:5]',
          },
        },
        {
          loader: 'sass-loader',
          options: {
            outputStyle: 'collapsed',
            sourceMap: true,
            includePaths: [sourcePath],
          },
        },
      ],
    });
  }  //EOF if(prod) , now start else dev
  else {
    plugins.push(
      // make hot reloading work
      new webpack.HotModuleReplacementPlugin(),
      // show module names instead of numbers in webpack stats
      new webpack.NamedModulesPlugin(),
      // don't spit out any errors in compiled assets
      new webpack.NoEmitOnErrorsPlugin()
    );

    cssLoader = [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          module: true,
          localIdentName: '[path][name]-[local]',
        },
      },
      {
        loader: 'sass-loader',
        options: {
          outputStyle: 'expanded',
          sourceMap: false,
          includePaths: [sourcePath],
        },
      },
    ];
  } //EOF else (dev)
 
 var PostCssloaders = [
   'style-loader',
   {
     loader: 'css-loader',
     options: {
       importLoaders: 1
     }
   },
   'postcss-loader'
];
//configure fonts;
const ModuleRules = {
	// ...
	componentStyles: {
		test: /\.scss$/,
		loaders: ["style-loader", "css-loader", "sass-loader"],
		exclude: path.resolve(__dirname, 'src/app')
	},
	fonts: {
		test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
		loader: 'file-loader?name=fonts/[name].[ext]'
	},
	images: {
		test: /\.(png|jpe?g|gif|ico)$/,
		loader: 'file-loader?name=assets/[name].[ext]'
	}
	// ...
}

  if (serviceWorkerBuild) {
    plugins.push(
      new SWPrecacheWebpackPlugin({
        cacheId: 'budgeting-app',
        filename: 'sw.js',
        maximumFileSizeToCacheInBytes: 800000,
        mergeStaticsConfig: true,
        minify: true,
        runtimeCaching: [
          {
            handler: 'cacheFirst',
            urlPattern: /(.*?)/,
          },
        ],
      })
    );
  }

  const entryPoint = isProd
    ? './index.js'
    : [
        // activate HMR for React
        'react-hot-loader/patch',

        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        `webpack-dev-server/client?http://${host}:${port}`,

        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        'webpack/hot/only-dev-server',

        // the entry point of our app
        './index.js',
      ];

  return {
    devtool: isProd ? 'source-map' : 'cheap-module-source-map',
    context: sourcePath,
    entry: {
      main: entryPoint,
    },
    output: {
      path: buildDirectory,
      publicPath: '/',
      filename: '[name].js',
      chunkFilename: '[name].js',
    },
    module: {
      rules: [
        // {
        //   test: /\.(html|svg|jpe?g|png|ttf|woff2?)$/,
        //   exclude: /node_modules/,
        //   use: {
        //     loader: 'file-loader',
        //     options: {
        //       name: 'static/[name]-[hash:8].[ext]',
        //     },
        //   },
        // },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: PostCssloaders,
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: cssLoader,
        },
        
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        
        ModuleRules.fonts,
      ],
    },
   
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
      modules: [path.resolve(__dirname, 'node_modules'), sourcePath],
    },

    plugins,

    performance: isProd && {
      maxAssetSize: 300000,
      maxEntrypointSize: 300000,
      hints: 'warning',
    },

    stats: stats,

    devServer: {
      contentBase: './app',
      publicPath: '/',
      historyApiFallback: true,
      port: port,
      host: host,
      hot: !isProd,
      compress: isProd,
      stats: stats,
    },
  };
};



// {
        //   test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        //   loader: "url-loader?limit=10000&mimetype=application/font-woff"
        // },
        // {
        //   test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        //   loader: "file-loader"
        // },
        // {
        //   test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        //   loader: 'url'
        // },
        //  {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
        //      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
        //      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
        //      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream"},
        //      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
 