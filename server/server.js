const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const initializeDBConnection = require("./config/db.connect");

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Connect to Database.
initializeDBConnection();

app.get("/api", (req, res) => {
  res.json({
    users: [
      { id: 1, name: "John" },
      { id: 2, name: "Sara" },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
