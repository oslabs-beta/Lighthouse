import { gql, ApolloServer } from "apollo-server-micro";
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core";
import prometheusAPI from "./prometheusAPI";

const typeDefs = gql`

  type metricObj{
    name: String
    instance: String 
    job: String
    kafka_id: String
  }
  
  type arrayObj{
    time: Float
    metric: String
  }

  type resultObj{
    metric: metricObj
    value: [arrayObj]
  }
  
  type dataObj{
    resultType: String
    result: [resultObj]
  }

  type JSONResult {
    status: String
    data: dataObj
  }

  type Query {
    prometheus: JSONResult
  }
`;

const resolvers = {
    Query: {
        prometheus: async () => {
            const output = await getPartitionCount()
            return output
        }
    },
};

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    dataSources: () => {
        return {
          prometheusAPI: new prometheusAPI(),
        };
    },
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
    await startServer;
    await apolloServer.createHandler({
        path: "/api/graphql",
    })(req, res);
}

export const config = {
    api: {
        bodyParser: false,
    },
};


// let books = [
//     {
//         "id": 0,
//         "name": "JavaScript for Dummies"
//     },
//     {
//         "id": 1,
//         "name": "Yeet"
//     },
//     {
//         "id": 2,
//         "name": "Yeet Pt.2: Electric Boogaloo "
//     }
//   // ... Write a few more ...
// ]

// const typeDefs = gql`
//   type Book {
//     id: ID!
//     name: String
//   }
//   type Query {
//     getBooks: [Book]
//   }
// `;


// const resolvers = {
//     Query: {
//         getBooks: () => {
//             return books
//         }
//     },
// };