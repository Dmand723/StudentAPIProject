const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awsomeFunction);
routes.get("/ttech", myController.ttechFunction);
module.exports = routes;
