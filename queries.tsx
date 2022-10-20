import {gql} from "@apollo/client";

//list of queries to be utilized via graphql to retrieve data from prometheus.

const gqlQueries = {

partitionCount: gql`
query Query {
  prometheus {
    data {
      result {
        value
      }
    }
  }
}
`,
receivedBytes: gql`
query Query {
  receivedBytes {
    data{
      result{
        value
      }
    }
  }
}
`,
sentBytes: gql`
query Query {
  sentBytes {
    data {
      result {
        value
      }
    }
  }
}
`,
sentRecords: gql`
query Query {
  sentRecords {
    data {
      result {
        value
      }
    }
  }
}
`,
receivedRecords: gql`
query Query {
  receivedRecords {
    data {
      result {
        value
      }
    }
  }
}
`,
authCount: gql`
query Query {
  successfulAuthenticationCount {
    data {
      result {
        value
      }
    }
  }
}
`,
activeConnections: gql`
query Query {
  activeConnectionCount {
    data {
      result {
        value
      }
    }
  }
}
`,
}

export default gqlQueries;