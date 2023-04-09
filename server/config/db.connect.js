const mongoose = require("mongoose");
const constants = require("./constants");
const Course = require("../models/course.js");
const data = require("../data/course.js");
const sanitize = require("mongo-sanitize");
const HrWise = require("../models/register.js");

const initializeDBConnection = async () => {
  try {
    await mongoose.connect(constants.db.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to database!");

    // console.log("Seeding course data...");
    // await Course.deleteMany();
    // const result = await Course.create({course: sanitize("Java")});
    // for(let i = 0; i < data.length; i++) {
    //   result.syllabus.push(data[i]);
    // }
    // await result.save();
    // console.log("Course data seeded successfully!");

    // create course distribution based on 2hr per day, 4 hr per day, 6 hr perday distribution
    console.log("Creating course distribution...");
    await HrWise.deleteMany();
    const result = await Course.find({ course: "Java" });

    const hrwise2 = await HrWise.create({ hrsPerDay: 2 });
    const hrwise4 = await HrWise.create({ hrsPerDay: 4 });
    const hrwise6 = await HrWise.create({ hrsPerDay: 6 });
    let currentDay = 1,
      currentCourse = 0,
      currentHr = 0;
    let scheduledCourses = { day: 1, courses: [] };
    // for 2 hr per day

    while (currentCourse < result[0].syllabus.length) {
      if (currentHr + result[0].syllabus[currentCourse].duration <= 120) {
        scheduledCourses.courses.push(result[0].syllabus[currentCourse]);
        currentHr += result[0].syllabus[currentCourse].duration;
        currentCourse++;
      } else {
        hrwise2.schedule.push(scheduledCourses);
        currentDay++;
        scheduledCourses = { day: currentDay, courses: [] };
        currentHr = 0;
      }
    }
    scheduledCourses = { day: 1, courses: [] };
    currentHr = 0;
    currentCourse = 0;
    currentDay = 1;

    // for 4 hr per day
    while (currentCourse < result[0].syllabus.length) {
      if (currentHr + result[0].syllabus[currentCourse].duration <= 240) {
        scheduledCourses.courses.push(result[0].syllabus[currentCourse]);
        currentHr += result[0].syllabus[currentCourse].duration;
        currentCourse++;
      } else {
        hrwise4.schedule.push(scheduledCourses);
        currentDay++;
        scheduledCourses = { day: currentDay, courses: [] };
        currentHr = 0;
      }
    }
    scheduledCourses = { day: 1, courses: [] };
    currentHr = 0;
    currentCourse = 0;
    currentDay = 1;
    // for 6 hr per day

    while (currentCourse < result[0].syllabus.length) {
      if (currentHr + result[0].syllabus[currentCourse].duration <= 360) {
        scheduledCourses.courses.push(result[0].syllabus[currentCourse]);
        currentHr += result[0].syllabus[currentCourse].duration;
        currentCourse++;
      } else {
        hrwise6.schedule.push(scheduledCourses);
        currentDay++;
        scheduledCourses = { day: currentDay, courses: [] };
        currentHr = 0;
      }
    }

    await hrwise2.save();

    await hrwise4.save();

    await hrwise6.save();

    console.log("Course distribution created successfully!");
  } catch (error) {
    console.error("Connection to database failed.", error.message);
  }
};

module.exports = initializeDBConnection;
