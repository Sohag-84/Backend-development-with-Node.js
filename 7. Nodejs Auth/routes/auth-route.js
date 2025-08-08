const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/auth-controller");

const router = express.Router();

//all routes are related to authentication and authoraization
router.post("/register", registerController);
router.post("/login",loginController);

module.exports = router;
