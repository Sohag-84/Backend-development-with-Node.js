require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const bookRoutes = require("./routes/book-routes");

const app = express();
const PORT = process.env.PORT || 3000;

//connect to database
connectToDB();

//middleware -> express.json()
app.use(express.json());

//routes here
app.use("/api", bookRoutes);

app.get("/",(req,res)=>{
  res.json({
    message: "hello world",
  })
})

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
