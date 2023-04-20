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
    receivedBytes: JSONResult
    sentBytes: JSONResult
    sentRecords: JSONResult
    receivedRecords: JSONResult
    successfulAuthenticationCount: JSONResult
    activeConnectionCount: JSONResult
  }
`;

const resolvers = {
  Query: {
    prometheus: async (_, __, { dataSources }) => {
      return dataSources.prometheusAPI.getPartitionCount();
    },
    receivedBytes: async (_,__, {dataSources}) => {
      return dataSources.prometheusAPI.getReceivedBytes();
    },
    sentBytes: async (_,__, {dataSources}) => {
      return dataSources.prometheusAPI.getSentBytes();
    },
    sentRecords: async (_,__, {dataSources}) => {
      return dataSources.prometheusAPI.getSentRecords();
    },
    receivedRecords: async (_,__, {dataSources}) => {
      return dataSources.prometheusAPI.getReceivedRecords();
    },
    successfulAuthenticationCount: async (_,__, {dataSources}) => {
      return dataSources.prometheusAPI.getAuthCount();
    },
    activeConnectionCount: async (_,__, {dataSources}) => {
      return dataSources.prometheusAPI.getActiveConnectionCount();
    }
  },
};


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
