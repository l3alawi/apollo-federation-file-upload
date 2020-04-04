const Koa = require('koa')
const { ApolloServer, gql } = require('apollo-server-koa')
const { ApolloGateway } = require('@apollo/gateway')

const PORT = 3000
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
}

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'files', url: 'http://localhost:3001/graphql' },
    // more services
  ],
})

const server = new ApolloServer({ gateway, subscriptions: false })

const app = new Koa()
server.applyMiddleware({ app })

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
)
