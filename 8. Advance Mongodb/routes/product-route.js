const express = require("express");
const {
  insertSampleProduct,
  getProductStats,
  getProductAnalysis,
} = require("../controllers/product-controller");

const router = express.Router();

router.post("/add", insertSampleProduct);
router.get("/get-stats", getProductStats);
router.get("/analysis", getProductAnalysis);

module.exports = router;
