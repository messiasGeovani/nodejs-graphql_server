// user model
const { Schema, model } = require('mongoose')

exports.User = model('Users', new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}))