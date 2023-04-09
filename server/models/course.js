const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  course: {
    type: String,
  },
  syllabus: [
    {
      cid: {
        type: Number,
      },
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      ctype: {
        type: String,
      },
      duration: {
        type: Number,
      },
    },
  ],
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
