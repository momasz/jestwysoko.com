const express = require('express');
const serverless = require('serverless-http');
const Bundler = require('parcel-bundler');
const path = require('path');

const app = express();
const bundler = new Bundler(path.resolve(__dirname, '../index.html'));

app.use(bundler.middleware());

module.exports = app;
module.exports.handler = serverless(app);
