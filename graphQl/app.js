const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema')
const port = 4800;

const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql:true
}))

app.listen(port,() => {
    console.log(`listing to port ${port}`)
})