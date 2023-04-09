const mongoose = require("mongoose");

const EnrollSchema = new mongoose.Schema(
  {
    course: {
      type: String,
    },
    hours: {
      type: String,
    },
    startDate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Enroll = mongoose.model("Enroll", EnrollSchema);

module.exports = Enroll;
