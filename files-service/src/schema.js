const { gql } = require('apollo-server-koa')

const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`

const resolvers = {
  Query: {
    helloWorld: () => 'hello world',
  },
}

module.exports = {
  typeDefs,
  resolvers,
}
