// server application main app
const { GraphQLServer } = require('graphql-yoga')

const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')

// creating a new graphql server config
exports.App = new GraphQLServer({
    // as same of routes in the server
    typeDefs,
    // as same of controllers in the server
    resolvers
})