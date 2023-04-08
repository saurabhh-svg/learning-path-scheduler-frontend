const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

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
