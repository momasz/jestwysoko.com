import fs from "fs";
import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import compression from "compression";
import serverLess from "serverless-http";
import path from "path";
import ReactDOMServer from "react-dom/server";
import App from "./../components/App";

const defaultTemplate = "dist/index.html";

const universalRender = (templateFile) => (req, res) => {
  const serveHTML = (err, htmlData) => {
    if (err) {
      console.error("Read error", err);
      return res.status(404).end();
    }

    const appString = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );

    htmlData = htmlData.replace(
      `<div id="app"></div>`,
      `<div id="app">${appString}</div>`
    );

    res.send(htmlData);
  };

  fs.readFile(templateFile, "utf8", serveHTML);
};

const createApp = (filePath = defaultTemplate, serveStatic = false) => {
  const app = express();
  const router = express.Router();

  app.use(compression());

  if (serveStatic) {
    app.use(express.static(path.resolve(__dirname, "../../dist")));
  }

  app.use('/.netlify/functions/index', router);
  app.use('/', universalRender(filePath));

  return app;
};

export const handler = serverLess(createApp());

export default createApp;
