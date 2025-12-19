const express = require("express");
const {
  createAuthor,
  createBook,
  getBookWithAuthor,
  getAllBooks,
} = require("../controllers/book-controller");

const router = express.Router();

router.post("/create-author", createAuthor);
router.post("/create-book", createBook);
router.get("/get-book/:id", getBookWithAuthor);
router.get("/get-all-books", getAllBooks);

module.exports = router;
