const bookResolvers = require("./book");
const authorResolvers = require("./author");

const resolvers = {
  ...bookResolvers,
  ...authorResolvers,
};

module.exports = resolvers;