require("dotenv").config();
const express = require("express");
const connectToDB = require("./db");
const authRoutes = require("./routes/auth-route");
const homeRoutes = require("./routes/home-routes");
const adminRoutes = require("./routes/admin-routes");

const app = express();
const PORT = process.env.PORT || 3000;

connectToDB();

//middleware -> express.json()
app.use(express.json());

//all routes here
app.use("/api/auth", authRoutes);
app.use("/api", homeRoutes);
app.use("/api", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
