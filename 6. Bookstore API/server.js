require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");

const app = express();
const PORT = process.env.PORT || 3000;

//connect to database
connectToDB();

//middleware -> express.json()
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
