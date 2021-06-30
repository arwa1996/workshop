const import { schema, graphql,GraphQLString ,GraphQLInt} from 'react-apollo'
const graphql = require('graphql');
const  GraphQlObjectType = graphql;


const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields:{
        id:{type: GraphQLString},
        name:{type: GraphQLString},
        description:{type: GraphQLString}
    }
    
})

const UserType = new GraphQlObjectType ({
    name: 'User',
    fields:{
        id:{type: GraphQLString},
        firstName:{type: GraphQLString},
        age:{type: GraphQLInt}
    },
    company:{type: CompanyType,
    resolve(parentValue,args){
        
    }
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