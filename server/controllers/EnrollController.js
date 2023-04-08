const router = require("express").Router();
const Event = require("../models/Event");
const moment = require("moment");

router.post("/enroll", async (req, res) => {
  const { course, hours, date } = req.body;
  const newEvent = new Event({
    course,
    hours,
    date,
  });
  try {
    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
