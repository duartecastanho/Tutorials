const express = require('express');
const { HTTPPORT } = require('./constants.js');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
    
}));

app.listen(HTTPPORT, () =>{
    console.log('Listening request on port ' + HTTPPORT);
});