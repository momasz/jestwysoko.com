import fs from "fs";
import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import compression from "compression";
import serverLess from "serverless-http";
import path from "path";
import ReactDOMServer from "react-dom/server";
import App from "./../components/App";

const app = express();
const router = express.Router();

app.use(compression());
app.use(express.static(path.resolve(__dirname, "../../dist")));

const universalRender = (req, res) => {
  const filePath = path.resolve(__dirname, "../../dist/index.html");

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

  fs.readFile(filePath, "utf8", serveHTML);
};

app.use('/.netlify/functions/index', router);
app.use('/', universalRender);

export const handler = serverLess(app);

export default app;
