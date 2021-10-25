const { ApolloServer } = require('apollo-server');
require("dotenv").config()


const typeDefs = `
    type Query {
        totalResult : Int!
    }
`;

const resolvers = {
    Query : {
        totalResult : () => 10
    }
}

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
})


apolloServer.listen(4000, () => {
    console.log("GraphQL server is running at 4000")
})