const express = require("express");
const app = express.Router();
const API = require("../api/_api");
const path = require("path");

app.use("/api", API);

app.use(express.static(path.join(__dirname, "dist")));

module.exports = app;
