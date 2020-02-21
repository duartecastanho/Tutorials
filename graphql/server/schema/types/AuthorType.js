const graphql = require('graphql');
const { 
    GraphQLObjectType, 
    GraphQLID,
    GraphQLString,
    GraphQLInt,
} = graphql;

module.exports = {
    AuthorType: new GraphQLObjectType({
        name: 'Author',
        fields: () =>({
            id: { type: GraphQLID },
            name:{ type: GraphQLString },
            age:{ type: GraphQLInt },
        })
    })
};