const router = require("express").Router();
const Enroll = require("../models/enroll");
const Hrwise = require("../models/register.js");

router.post("/enroll", async (req, res) => {
  const { course, hours, date } = req.body;
  const hrwiseData = await Hrwise.find({ hrsPerDay: hours });
  const hrwiseid = hrwiseData[0]._id;
  const newEnroll = new Enroll({
    course,
    hours,
    date,
    schedule: hrwiseid,
  });
  try {
    const savedEnroll = await newEnroll.save();
    const populatedEnroll = await Enroll.findById(savedEnroll._id)
      .populate("schedule")
      .exec();
    res.status(200).json(populatedEnroll);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
