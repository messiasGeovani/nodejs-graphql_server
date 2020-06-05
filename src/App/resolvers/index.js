// resolvers main config file

const { users } = require('./users')

exports.resolvers = {
    
    Query: {
        users: users.index,
        user: users.show
    },

    Mutation: {
        createUser: users.store
    }
    
}