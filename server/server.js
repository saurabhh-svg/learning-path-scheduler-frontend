const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const initializeDBConnection = require("./config/db.connect");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Connect to Database.
initializeDBConnection();

// Routes
app.use("/api/enroll", require("./controllers/EnrollController"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
