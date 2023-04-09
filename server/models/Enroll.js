const mongoose = require("mongoose");
const Hrwise = require("./register");

const EnrollSchema = new mongoose.Schema(
  {
    course: {
      type: String,
    },
    hours: {
      type: String,
    },
    date: {
      type: String,
    },
    schedule: {
      ref: Hrwise,
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

const Enroll = mongoose.model("Enroll", EnrollSchema);

module.exports = Enroll;
