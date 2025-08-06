const express = require("express");
const app = express();

const PORT = 3000;

const requrestTimesTampLogger = (req, res, next) => {
  const timesTamp = new Date().toISOString();
  console.log(`${timesTamp} from ${req.method} to ${req.url}`);

  next();
};

app.use(requrestTimesTampLogger);

app.get("/", (req, res) => {
  res.json("home page");
});
app.get("/about", (req, res) => {
  res.json("about page");
});

app.listen(PORT, () => {
  console.log(`Server is now running at port ${PORT}`);
});
