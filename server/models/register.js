const mongoose = require("mongoose");

const HrWiseSchema = new mongoose.Schema({
  hrsPerDay: {
    type: Number,
  },
  schedule: [
    {
      day: Number,
      courses: [
        {
          cid: Number,
          title: String,
          description: String,
          ctype: String,
          duration: Number,
        },
      ],
    },
  ],
});

const HrWise = mongoose.model("HrWise", HrWiseSchema);

module.exports = HrWise;
