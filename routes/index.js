const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awsomeFunction);
routes.get("/ttech", myController.ttechFunction);
routes.get("/whatsThis", myController.dawsonFunction);
routes.get("/studentsTest", myController.getAllStudents);

//student routes
routes.use("/students", require("./students"));
module.exports = routes;
