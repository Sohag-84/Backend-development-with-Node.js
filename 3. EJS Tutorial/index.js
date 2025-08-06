const express = require("express");
const path = require("path");
const { title } = require("process");

const app = express();
const PORT = "3000";

//set the view engine as ejs
app.set("view engine", "ejs");

//set the directory
app.set("views", path.join(__dirname, "views"));

const products = [
  {
    id: 1,
    title: "Product 1",
  },
  {
    id: 2,
    title: "Product 2",
  },
  {
    id: 3,
    title: "Product 3",
  },
];

app.get("/", (req, res) => {
  res.render("home", { title: "Home", products: products });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About " });
});

app.listen(PORT, () => {
  console.log(`Server is now running at port ${PORT}`);
});
