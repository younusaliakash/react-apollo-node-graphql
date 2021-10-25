const { gql } = require('apollo-server-express')

module.exports = gql `
    type Query {
        totalResult : Int!
        me : String
    }
`