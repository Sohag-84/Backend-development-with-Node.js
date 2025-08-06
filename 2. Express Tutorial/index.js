const express = require("express");

const app = express();
const PORT = "3000";

app.get("/", (req, res) => {
  res.json({ "message ": "hello wrold" });
});

app.listen(PORT, () => {
  console.log(`Server is now running at port ${PORT}`);
});
