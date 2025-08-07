const express = require("express");

const {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
} = require("../controllers/book-controller");

//create express router
const router = express.Router();

//create all the routes that are related to book only

router.get("/books", getAllBooks);
router.get("/book/:id", getSingleBookById);
router.post("/add-book", addNewBook);
router.update("/update-book/:id", updateBook);
router.delete("/delete-book/:id", deleteBook);

module.exports = router;
