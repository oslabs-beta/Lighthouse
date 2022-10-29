import { useEffect, useState } from "react";
import gqlQueries from "../../../queries";
import { gql, useQuery } from '@apollo/client';
import client from "../../../apollo-client";

function ActiveConnectionCount(props) {
  const {loading, error, data} = useQuery(gqlQueries.activeConnections);

  const connectionCount = props.results
  return(
    <div>
    Active Connections
    <div>{connectionCount ? connectionCount : 0}</div>
    </div>
  )
}



  module.exports = ActiveConnectionCount