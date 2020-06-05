// users resolvers file

const { User } = require('../models/User')

exports.users = {

    store(_, { name, email }) {
        return User.create({ name, email })
    },

    index() {
        return User.find()
    },

    show(_, { id }) {
        return User.findById(id)
    }

}