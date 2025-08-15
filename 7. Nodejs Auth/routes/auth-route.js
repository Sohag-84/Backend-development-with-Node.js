const express = require("express");

const authMiddleware = require("../middleware/auth-middleware");
const {
  registerController,
  loginController,
  changePassword,
} = require("../controllers/auth-controller");

const router = express.Router();

//all routes are related to authentication and authoraization
router.post("/register", registerController);
router.post("/login", loginController);
router.post("/change-password", authMiddleware, changePassword);

module.exports = router;
