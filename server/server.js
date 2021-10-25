const express = require("express");
const mongoose = require("mongoose")
const { ApolloServer } = require('apollo-server-express');
require("dotenv").config()

const app = express();

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
})

//query
const typeDefs = require('./typeDefs');

//resolvers
const resolvers = require('./resolvers')


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
