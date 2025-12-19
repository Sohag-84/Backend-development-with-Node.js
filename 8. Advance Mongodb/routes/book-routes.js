const express = require("express");
const { createAuthor, createBook } = require("../controllers/book-controller");

const router = express.Router();

router.post("/create-author", createAuthor);
router.post("/create-book", createBook);

module.exports = router;
