const graphql = require('graphql');
const _= require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// Dummy data
const books = [
  {name: 'Book 1', genre:'Fantasy', id:'1'},
  {name: 'Book 2', genre:'Drama', id:'2'},
  {name: 'Book 3', genre:'Action', id:'3'},
  {name: 'Book 4', genre:'Fantasy', id:'4'}
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () =>({
        id: { type: GraphQLString },
        name:{ type: GraphQLString },
        genre:{ type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString }},
            resolve(parent, args){
                // code to get data from db
                return _.find(books, {id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
