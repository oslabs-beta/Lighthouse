import {gql} from "@apollo/client";

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