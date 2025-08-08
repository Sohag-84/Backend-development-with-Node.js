require("dotenv").config();
const express = require("express");
const connectToDB = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

connectToDB();

app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    msg: "Data fetched successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
