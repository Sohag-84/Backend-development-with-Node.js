const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Book title is requred"],
    trim: true,
    maxLength: [100, "Book title can not be more than 100 characters"],
  },
  author: {
    type: String,
    require: [true, "Author name is requred"],
    trim: true,
  },
  year: {
    type: Number,
    require: [true, "Publication year is requred"],
    min: [1000, "Publication year must be greater than 1000"],
    max: [
      new Date().getFullYear(),
      "Publication year can not be greater than current year",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Book",BookSchema);
