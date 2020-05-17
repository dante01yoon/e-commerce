import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ChunkExtractor } from '@loadable/server';
import { ServerStyleSheet } from 'styled-components';
const app = express();

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.client.js').map((config: any) => {
    config.output.path = config.output.path.replace('dist/dist/', 'dist/');
    return config;
  });

  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const compiler = webpack(webpackConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      logLevel: 'silent',
      publicPath: webpackConfig[0].output.publicPath,
      writeToDisk: true,
    }),
  );

  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.resolve(__dirname)));

app.get('*', (req, res) => {
const sheet = new ServerStyleSheet(); 
const nodeStats = path.resolve(__dirname, './node/loadable-stats.json');
const webStats = path.resolve(__dirname, './web/loadable-stats.json');
const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats });
const { default: App } = nodeExtractor.requireEntrypoint();
const webExtractor = new ChunkExtractor({ statsFile: webStats });

const context = {};

  
const jsx = webExtractor.collectChunks(
  <StaticRouter location={req.url} context={context}>
    <App/>
  </StaticRouter>
);
const html = renderToString(sheet.collectStyles(jsx));
const helmet = Helmet.renderStatic();
const styles = sheet.getStyleTags(); 
const collected = {
  script: webExtractor.getScriptTags(),
  link: webExtractor.getLinkTags(),
  style: webExtractor.getStyleTags() + styles 
}
res.set('content-type', 'text/html');
res.send(`
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, user-scalable=no">
        <meta name="google" content="notranslate">
        ${helmet.title.toString()}
        ${webExtractor.getLinkTags()}
        ${webExtractor.getStyleTags() + styles}
      </head>
      <body>
        <div id="root">${html}</div>
        ${webExtractor.getScriptTags() }
      </body>
    </html>
`);

});

app.listen(5000, () => console.log('Server started http://localhost:5000'));