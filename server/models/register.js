const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
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

const Register = mongoose.model("Register", RegisterSchema);

module.exports = Register;
