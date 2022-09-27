import { gql, ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { PrometheusAPI } from "./prometheusAPI";

const typeDefs = gql`
  type Metric { 
    name: String
    instance: String
    job: String
    kafka_id: String 
  }

  type Result { 
    value: [Int ] 
    metric: Metric 
  }

  type Data {
    resultType: String 
    result: [Result ] 
  }

  type JSONResult { 
    status: String 
    data: Data 
  }

  type Query {
    prometheus: JSONResult
  }
`;

// NEW resolvers 9/26/2022//
const resolvers = {
  Query: {
    prometheus: async (_, __, { dataSources }) => {
      return dataSources.prometheusAPI.getPartitionCount();
    },
  },
};

// NEW apolloServer 9/26/2022 //

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  plugins:[
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
  dataSources: () => {
    return {
      prometheusAPI: new PrometheusAPI()
    };
  },
  context: () => {
    return {
      token: 'foo',
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
