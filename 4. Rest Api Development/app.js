const express = require("express");

const app = express();

const PORT = 3000;

//middleware
app.use(express.json());

const books = [
  {
    id: 1,
    title: "Book 1",
  },
  {
    id: 2,
    title: "Book 2",
  },
  {
    id: 3,
    title: "Book 3",
  },
];

//intro route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our bookstore api",
  });
});

//get all books
app.get("/books", (req, res) => {
  res.json({
    data: books,
    message: "success",
  });
});

//get single books
app.get("/book/:id", (req, res) => {
  const book = books.find((item) => item.id == req.params.id);
  if (book) {
    res.status(200).json({
      data: book,
      message: "success",
    });
  } else {
    res.status(404).json({
      message: "book not found",
    });
  }
});

//add new book
app.post("/add-book", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: `Book ${books.length + 1}`,
  };
  books.push(newBook);
  res.status(200).json({
    data: newBook,
    message: "New book is added successfully",
  });
});

//update a book
app.put("/book-update/:id", (req, res) => {
  const findCurrentBook = books.find(
    (bookItem) => bookItem.id == req.params.id
  );
  if (findCurrentBook) {
    findCurrentBook.title = req.body.title || findCurrentBook.title;
    res.status(200).json({
      data: findCurrentBook,
      message: "Book updated successfully",
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

//delete book
app.delete("/book-delete/:id", (req, res) => {
  const findIndexOfCurrentBook = books.findIndex(
    (bookItem) => bookItem.id == req.params.id
  );

  if (findIndexOfCurrentBook != -1) {
    const deletedBook = books.splice(findIndexOfCurrentBook, 1);
    res.status(200).json({
      message: "Book deleted successfully",
      data: deletedBook[0],
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is now starting at port ${PORT}`);
});
