import { useEffect, useState } from "react";
import gqlQueries from "../../../queries";
import { gql, useQuery } from '@apollo/client';
import client from "/Users/nao/codesmith/Lighthouse/apollo-client.js";

export default function ReceivedBytes(){
const [receivedBytes, setReceivedBytes] = useState(0);
const {loading, error, data} = useQuery(gqlQueries.receivedBytes);

useEffect(() => {
  fetcher();
  const interval = setInterval(()=> {
    client.refetchQueries({
      include: "active"
    })
    .then((data) => {
      setReceivedBytes(data[0].data.receivedBytes.data.result[0].value[1])
    })
  }, 30000)

  return () => clearInterval(interval)

}, [receivedBytes])

function fetcher (){
  console.log('calle')

  client.query({
    query: gqlQueries.receivedBytes
  })
  .then((data) => {
      setReceivedBytes(data.data.receivedBytes.data.result[0].value[1])
  })
}



return (
  <>
  <div>{receivedBytes}</div>
  </>
)


}
