const router = require("express").Router();
const Event = require("../models/enroll");
const moment = require("moment");
const hrwises = require("../models/register");

router.get("/schedule", async (req, res) => {
  const result = await hrwises.find({ hrsPerDay: 2 });
  Event.find({}).then((events) => {
    res.send(events);
  });
});

module.exports = router;
