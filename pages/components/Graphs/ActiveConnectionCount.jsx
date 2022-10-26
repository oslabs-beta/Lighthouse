import { useEffect, useState } from "react";
import gqlQueries from "../../../queries";
import { gql, useQuery } from '@apollo/client';
import client from "../../../apollo-client";

function ActiveConnectionCount() {
  const [activeConnections, setActiveConnections] = useState(0);
  const {loading, error, data} = useQuery(gqlQueries.activeConnections);

  return(
    <div>
    Active Connections
    <div>{activeConnections}</div>
    </div>
  )
}



  module.exports = ActiveConnectionCount