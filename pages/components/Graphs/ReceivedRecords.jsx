import { useEffect, useState } from "react";
import gqlQueries from "../../../queries";
import { gql, useQuery } from '@apollo/client';
import client from "../../../apollo-client";

function ReceivedRecords(props) {
  const [receivedRecords, setReceivedRecords] = useState(0);
  const {loading, error, data} = useQuery(gqlQueries.receivedRecords);


  return(
    <div>
    Received Records
    <div>{receivedRecords}</div>
    </div>
  )
}



  module.exports = ReceivedRecords