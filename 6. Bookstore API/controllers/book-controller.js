const mongoose = require("mongoose");

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

const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    // Check ID format is valid or not
    if (!mongoose.Types.ObjectId.isValid(getCurrentBookID)) {
      return res.status(400).json({
        success: false,
        message: "Your Id format is wrong!",
      });
    }
    const bookDetailsByID = await Book.findById(getCurrentBookID);

    if (!bookDetailsByID) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      data: bookDetailsByID,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

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
const updateBook = async (req, res) => {
  try {
    const updateBookFormData = req.body;
    const getCurrentBookID = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(
      getCurrentBookID,
      updateBookFormData,
      {
        new: true,
      }
    );
    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to add book",
      error: error.message,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({
        success:false,
        message: "Book not found!",
      });
    }
    res.json({
      success: true,
      message: "Book deleted successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
  const book = await Book.findByIdAndDelete(req.params.id);
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
