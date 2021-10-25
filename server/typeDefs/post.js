const { gql } = require('apollo-server-express')

module.exports = gql `
    type Post {
        id: ID!
        title : String!
        description : String!        
    }
    type Query {
        totalPosts : Int!
        posts : [Post!]!
    }
    input PostInput {
        title: String!
        description: String!
    }
    type Mutation {
        newPost( input : PostInput!): Post!
    }
`