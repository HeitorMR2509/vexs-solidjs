const app = require("express").Router();

app.get("/", (_, res) => res.send("Hello, SolidJS!"));

module.exports = app;
