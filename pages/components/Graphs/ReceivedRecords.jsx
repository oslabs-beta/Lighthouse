import { useEffect, useState } from "react";
import gqlQueries from "../../../queries";
import { gql, useQuery } from '@apollo/client';
import client from "../../../apollo-client";

function ReceivedRecords(props) {
  const {loading, error, data} = useQuery(gqlQueries.receivedRecords);
  let record = props.results

  return(
    <div>
    Received Records
    <div> {record ? record : 0}</div>
    </div>
  )
}

module.exports = ReceivedRecords