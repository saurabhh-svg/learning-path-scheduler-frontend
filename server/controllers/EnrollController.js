const router = require("express").Router();
const Enroll = require("../models/Enroll");
const moment = require("moment");

router.post("/enroll", async (req, res) => {
  const { course, hours, date } = req.body;
  const newEnroll = new Enroll({
    course,
    hours,
    date,
  });
  try {
    const savedEnroll = await newEnroll.save();
    res.status(200).json(savedEnroll);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
