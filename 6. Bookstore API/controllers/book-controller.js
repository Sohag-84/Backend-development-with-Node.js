const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    res.json({
      data: allBooks,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getSingleBookById = async (req, res) => {};
const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newBookFormData) {
      res.status(201).json({
        success: true,
        message: "Book is added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to add book",
      error: error.message,
    });
  }
};
const updateBook = async (req, res) => {};
const deleteBook = async (req, res) => {};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
