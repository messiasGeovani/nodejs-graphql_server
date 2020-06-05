// graphql schemas main config file
const { mutations } = require('./mutations')
const { queries } = require('./queries')
const { userSchema } = require('./user')

exports.typeDefs = `
    ${userSchema}

    ${queries}
    
    ${mutations}        
`