const express = require("express");
const getAllUsers = require("../controllers/user_controller");

const router = express.Router();

router.get("/users", getAllUsers);

module.exports = router;
