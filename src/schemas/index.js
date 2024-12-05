const { buildSchema } = require("graphql")
const bookSchema = require('./books')
const authorSchema = require('./author')

const rootSchema =`
${bookSchema}
${authorSchema}
`;

module.exports = buildSchema(rootSchema);