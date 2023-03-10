const express = require("express");
const serverLess = require("serverless-http");
const server = express();
const router = express.Router();
const bodyParser = require("body-parser");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.json())

router
  .get("/get", (req, res) => res.json({ message: "GET Request" }).status(200))
  .post("/post", (req, res) =>
    res.json({ message: "POST Request" }).status(200)
  )
  .put("/put", (req, res) => res.json({ message: "PUT Request" }).status(200))
  .delete("/delete", (req, res) =>
    res.json({ message: "DELETE Request" }).status(200)
  );

server.use("/.netlify/functions/api", router);
module.exports.handler = serverLess(server);
