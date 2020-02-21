const graphql = require('graphql');
const _= require('lodash');
const {books, authors} = require('./dummyData');
const Types = require('./types/Types');

const { 
    GraphQLObjectType,
    GraphQLSchema, 
    GraphQLID,
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: Types.BookType,
            args: {id: {type: GraphQLID }},
            resolve(parent, args){
                // code to get data from db
                return _.find(books, {id: args.id});
            }
        },
        author: {
            type: Types.AuthorType,
            args: {id: { type: GraphQLID }},
            resolve(parent, args){
                // code to get data from db
                return _.find(authors, {id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
