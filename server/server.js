const express = require("express");
const { ApolloServer } = require('apollo-server-express');
const http = require('http')
require("dotenv").config()

const app = express();

//query
const typeDefs = `
    type Query {
        totalResult : Int!
    }
`;

//resolvers
const resolvers = {
    Query : {
        totalResult : () => 10
    }
}


//rest api
app.get('/get', (req, res) => {
    res.send("all right")
})

async function startServer() {
    const server = new ApolloServer({typeDefs, resolvers})
    await server.start()

    //middlewar
    server.applyMiddleware({app, path: '/graphql'})


    app.listen(4000, () => {
        console.log('server is running')
    })
}
startServer()
