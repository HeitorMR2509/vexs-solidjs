const app = require("express").Router();
const { createServer: ViteCreateServer } = require("vite");
const API = require("../api/_api");

app.use("/api", API);

(async () => {
  const vite = await ViteCreateServer({
    server: {
      middlewareMode: true,
    },
  });

  app.use(vite.middlewares);

  console.log("Vite carregado!");
})();

module.exports = app;
