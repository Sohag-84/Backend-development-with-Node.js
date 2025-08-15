const express = require("express");
const uploadImageController = require("../controllers/image-controller");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const uploadImageMiddleware = require("../middleware/upload-image-middleware");

const router = express.Router();

router.post(
  "/upload",
  authMiddleware,
  adminMiddleware,
  uploadImageMiddleware.single("image"),
  uploadImageController
);

module.exports = router;
