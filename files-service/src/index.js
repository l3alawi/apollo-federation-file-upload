const Koa = require('koa')
const { ApolloServer } = require('apollo-server-koa')
const { buildFederatedSchema } = require('@apollo/federation')

const { typeDefs, resolvers } = require('./schema.js')

const PORT = 3001

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers,
    },
  ]),
})
const app = new Koa()
server.applyMiddleware({ app })

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
)
