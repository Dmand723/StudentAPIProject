const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const awsomeFunction = (req, res) => {
  res.send("Hello World!");
};

const ttechFunction = (req, res) => {
  res.send("Tooele Tech Is Awesome");
};
const dawsonFunction = (req, res) => {
  res.send("Dawson is sooo cool :)");
};
const getAllStudents = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection("students").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  awsomeFunction,
  ttechFunction,
  dawsonFunction,
  getAllStudents,
};
