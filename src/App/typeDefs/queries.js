// graphql queries schema config file

exports.queries = `
    type Query {
        users: [User!]!
        user(id: ID!): User
    }
`