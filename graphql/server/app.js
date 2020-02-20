const express = require('express');
const { HTTPPORT } = require('./constants.js');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(HTTPPORT, () => {
  console.log('Listening request on port ' + HTTPPORT);
});
