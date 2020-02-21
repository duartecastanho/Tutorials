const graphql = require('graphql');
const _ = require('lodash');

const{ books } = require('../dummyData');
const Types = require('./Types');

const { 
    GraphQLObjectType, 
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} = graphql;


module.exports.AuthorType = () => {
    new GraphQLObjectType({
        name: 'Author',
        fields: () =>({
            id: { type: GraphQLID },
            name:{ type: GraphQLString },
            age:{ type: GraphQLInt },
            books: {
                type: new GraphQLList(Types.BookType),
                resolve(parent, id){
                    return _.filter(books, {authorId: parent.id});
                }
            }
        })
    })
};