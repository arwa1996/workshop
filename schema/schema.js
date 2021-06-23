const import { schema, graphql,GraphQLString ,GraphQLInt} from 'react-apollo'
const graphql = require('graphql');
const  GraphQlObjectType = graphql;

const UserType = new GraphQlObjectType ({
    name: 'User',
    fields:{
        id:{type: GraphQLString},
        firstName:{type: GraphQLString},
        age:{type: GraphQLInt}
    }
})

// root 

const RootQuery = new GraphQlObjectType ({
    name: 'RootQueryType',
    fields:{
        user:{type: UserType,
        args: {id:{type: GraphQLString}},
        resolved:(parentValue,args) {
        return _.find(users,{id:args.id})
    }
    },
       
    }
});

module.export=new GraphQLSchema({
    query: RootQuery
})