const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");

const router = express.Router();

router.get("/home", authMiddleware, (req, res) => {
  const { username, userId, email, role } = req.userInfo;
  res.json({
    message: "Welcome to home page",
    user: {
      _id: userId,
      username,
      email,
      role,
    },
  });
});

module.exports = router;
