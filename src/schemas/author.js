const authorSchema = `
  type Author {
    _id: ID!
    name: String!
    email: String!
    books: [Book] # Relationship to Book type
  }

  extend type Query {
    authors: [Author]
    author(id: ID!): Author
  }

  extend type Mutation {
    addAuthor(name: String!, email: String!): Author
    addBookToAuthor(authorId: ID!, bookId: ID!): Author
  }
`;

module.exports = authorSchema;
