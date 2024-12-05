const Author = require("../models/author");
const Book = require("../models/book");

const authorResolvers = {
  // Queries
  authors: async () => {
    return await Author.find().populate("books");
  },
  author: async ({ id }) => {
    return await Author.findById(id).populate("books");
  },

  // Mutations
  addAuthor: async ({ name, email }) => {
    const author = new Author({ name, email });
    return await author.save();
  },

};

module.exports = authorResolvers;
