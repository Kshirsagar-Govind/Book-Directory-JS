const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas/index");
const resolvers = require("./resolver/index");
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

module.exports = app;
