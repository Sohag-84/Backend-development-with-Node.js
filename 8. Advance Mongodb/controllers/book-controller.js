const Author = require("../models/Author");
const Book = require("../models/Book");

const createAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();

    res.status(201).json({
      status: true,
      message: "Author is created",
      author,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Some error occured",
    });
  }
};
const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json({
      status: true,
      message: "Book is created successfully",
      book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Some error occured",
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const book = await Book.find().populate("author");
    if (!book) {
      return res.status(404).json({
        status: false,
        message: "Book is not found",
      });
    }

    res.json({
      status: true,
      book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Some error occured",
    });
  }
};

getBookWithAuthor = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("author");

    if (!book) {
      return res.status(404).json({
        status: false,
        message: "Book is not found",
      });
    }

    res.json({
      status: true,
      book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Some error occured",
    });
  }
};

module.exports = { createAuthor, createBook, getBookWithAuthor, getAllBooks };
