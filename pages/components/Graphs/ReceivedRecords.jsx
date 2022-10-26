import { useEffect, useState } from "react";
import gqlQueries from "../../../queries";
import { gql, useQuery } from '@apollo/client';
import client from "../../../apollo-client";

function ReceivedRecords() {
  const [receivedRecords, setReceivedRecords] = useState(0);
  const {loading, error, data} = useQuery(gqlQueries.receivedRecords);
  useEffect(() => {

    const interval = setInterval(()=> {
      client.refetchQueries({
        include: "active"
      })
      .then((data) => {
        console.log(data)
        setReceivedRecords(data[1].data.receivedRecords.data.result[0].value[1])
      })
    }, 2000)
  
    return () => clearInterval(interval)
  
  },[receivedRecords])
  return(
    <div>
    Received Records
    <div>{receivedRecords}</div>
    </div>
  )
}



  module.exports = ReceivedRecords