require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product-route");

const app = express();
const PORT = process.env.PORT || 3000;

//connect to our database
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("mongodb connected successfully"))
  .catch((e) => console.log(e));

//use middlewares
app.use(express.json());

app.use("/api/product", productRoutes);
app.get("/", (req, res) => {
  res.json({ message: "This page is home page", status: true });
});

app.listen(PORT, () => {
  console.log(`Server is now runnig on port ${PORT}`);
});
