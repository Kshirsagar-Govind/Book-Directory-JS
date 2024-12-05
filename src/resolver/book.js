const Book = require("../models/book");
const mongoose = require('mongoose')
const resolvers = {
  books: async () => {
    return await Book.find();
  },
  book: async ({ id }) => {
    return await Book.findById(id);
  },
  addBook: async ({ input }) => {
    return await Book.create(input);
  },
  updateBook: async ({ id, input }) => {
    return await Book.findByIdAndUpdate(id, input, { new: true });
  },
  deleteBook: async ({ id }) => {
    const book = Book.findByIdAndDelete(id);
    if (!book) return "Book not found";
    return "Book deleted successfully!";
  },
};

module.exports = resolvers;