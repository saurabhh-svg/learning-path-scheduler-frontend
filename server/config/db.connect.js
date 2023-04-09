const mongoose = require("mongoose");
const constants = require("./constants");
const Course = require("../models/course.js");
const data = require("../data/course.js");
const sanitize = require("mongo-sanitize");

const initializeDBConnection = async () => {
  try {
    await mongoose.connect(constants.db.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to database!");
    // console.log("Seeding course data...");
    // await Course.deleteMany();
    // const result = await Course.create({ course: sanitize("Java") });
    // for (let i = 0; i < data.length; i++) {
    //   result.syllabus.push(data[i]);
    // }
    // await result.save();
    // console.log("Course data seeded successfully!");
  } catch (error) {
    console.error("Connection to database failed.", error.message);
  }
};

module.exports = initializeDBConnection;
