const { mongo } = require("mongoose");
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
//GET Single Student
const getSingleStudent = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection("students")
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists[0]);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

//CREATE contact
const createStudent = async (req, res) => {
  try {
    const student = {
      firstName: req.body.firstName,
      middleInital: req.body.middleInital,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age,
      currentCollege: req.body.currentCollege,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection("students")
      .insertOne(student);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while creating the student."
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//UPDATE one student
const updateStudent = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const student = {
      firstName: req.body.firstName,
      middleInital: req.body.middleInital,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age,
      currentCollege: req.body.currentCollege,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection("students")
      .replaceOne({ _id: userId }, student);
    if (response.acknowledged) {
      res.status(204).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while updating the student."
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//DELETE one student
const deleteStudent = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection("students")
      .deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.acknowledged) {
      res.status(200).send(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while deleting the student."
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  awsomeFunction,
  ttechFunction,
  dawsonFunction,
  getAllStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
