const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Book{
    _id : ID!
    title : String!
    author:String!
    genre : String!
    publishedOn : String!
    }

    input BookInput{
    title:String!
    author:String!
    genre:String!
    publishedOn:String!
    }

    type Query{
    books:[Book]
    book(id:ID!):Book
    }

    type Mutation{
    addBook(input:BookInput):Book
    updateBook(id:ID!, input:BookInput):Book
    deleteBook(id:ID!):String
    }

`);

module.exports = schema;
