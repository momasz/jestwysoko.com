'use strict';

const express = require('express');

const onProduction = process.env.NODE_ENV === 'production';
const DIR = onProduction ? `${__dirname}/dist` : `${__dirname}/src`;

const app = express();
app.set('port', (process.env.PORT || 5000));
app.set('views', DIR);
app.use(express.static(DIR));

if (onProduction) {
  app.use(require('compression')());
} else {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config');
  const compiler = webpack(webpackConfig);

  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {colors: true},
    historyApiFallback: true
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }));
}

app.listen(app.get('port'), () => console.log('App listening port', app.get('port')));
