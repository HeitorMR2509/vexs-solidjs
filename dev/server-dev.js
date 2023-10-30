const express = require("express");
const http = require("http");
const fs = require("fs");
const path = require("path");
const root = process.cwd();

const APP = require("./_app-dev");

if (!fs.existsSync(path.join(root, ".env"))) {
  const { defaultPORT } = require("../config/server.json");
  fs.writeFileSync(path.join(root, ".env"), `PORT=${defaultPORT}`);
}

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(APP);

const server = http.createServer(app);
server.listen(process.env.PORT, () =>
  console.log(`> [SERVER] Ouvindo em http://localhost:${process.env.PORT}`)
);
