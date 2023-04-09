const router = require("express").Router();
const Event = require("../models/enroll");
const moment = require("moment");

router.post("/create-event", async (req, res) => {
  const event = Event(req.body);
  await event.save();
  res.sendStatus(201);
});

router.get("/get-events", async (req, res) => {
  const events = await Event.find({
    start: {
      $gte: moment(req.query.start).toDate(),
    },
    end: {
      $lt: moment(req.query.end).toDate(),
    },
  });

  res.send(events);
});

router.route("/").get((req, res) => {
  Event.find()
    .then((events) => res.json(events))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
