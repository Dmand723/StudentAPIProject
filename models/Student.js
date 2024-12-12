//Part 2 on part 2

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleInital: {
    type: String,
    maxlength: 1,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  currentCollege: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("students", StudentSchema);
