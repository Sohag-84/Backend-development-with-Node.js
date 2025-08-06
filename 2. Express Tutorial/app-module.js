const express = require("express");

const app = express();

const PORT = "3000";

//application level settings
app.set("view engine", "ejs");

//routing
app.get("/", (req, res) => {
  res.send("Home page");
});

app.post("/api/data", (req, res) => {
  res.json({
    message: "Data received",
    data: req.body,
  });
});

app.use((err, req, res, next) => {
  console.log(err.stack);

  res.status(500).send("Someting went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server is now running at port ${PORT}`);
});
