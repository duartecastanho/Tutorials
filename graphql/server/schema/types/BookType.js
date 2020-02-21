const _= require('lodash');
const graphql = require('graphql');
const { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
} = graphql;
const{ authors } = require('../dummyData');
const { AuthorType } = require('./Types.js');

// FIXME can't import AuthorType, currently using require('./Types').AuthorType
module.exports = {
    BookType: new GraphQLObjectType({
        name: 'Book',
        fields: () =>({
            id: { type: GraphQLID },
            name:{ type: GraphQLString },
            genre:{ type: GraphQLString },
            author:{ 
                type:  require('./Types').AuthorType,
                resolve(parent, args){
                    // Get the authors associated to the book
                    return _.find(authors, { id: parent.authorId });
                }
            },
        })
    })
};