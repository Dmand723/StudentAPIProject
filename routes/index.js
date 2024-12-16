const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awsomeFunction);
routes.get("/ttech", myController.ttechFunction);
routes.get("/whatsThis", myController.dawsonFunction);
routes.get("/students", myController.getAllStudents);
module.exports = routes;
