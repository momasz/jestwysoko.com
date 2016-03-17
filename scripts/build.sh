#!/usr/bin/env bash
./node_modules/.bin/webpack --verbose --colors --display-error-details --config webpack.dist.config.js
mkdir -p dist
cp src/index.html dist
cp -rf src/static dist
