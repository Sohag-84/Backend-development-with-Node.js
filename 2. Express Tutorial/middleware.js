const express = require("express");
const app = express();

//define middleware function
const myFirstMiddlware = (req, res, next) => {
  console.log("This middleware will run on every request");
  next();
};

app.use(myFirstMiddlware);

app.get("/", (req, res) => {
  res.json("home page");
});
app.get("/about", (req, res) => {
  res.json("about page");
});

app.listen(3000, () => {
  console.log(`Server is now running at port 3000`);
});
