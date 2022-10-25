import { useEffect, useState } from "react";
import gqlQueries from "../../../queries";
import { gql, useQuery } from '@apollo/client';
import client from "/Users/nao/codesmith/Lighthouse/apollo-client.js";

function ReceivedRecords() {
  const [receivedRecords, setReceivedRecords] = useState(0);
  const {loading, error, data} = useQuery(gqlQueries.receivedRecords);
  // useEffect(() => {
    // test();
  //   const interval = setInterval(()=> {
  //     client.refetchQueries({
  //       include: [gqlQueries.receivedRecords]
  //     })
  //     .then((data) => {
  //       console.log(data)
  //       // setReceviedRecords(data[0].data.receivedBytes.data.result[0].value[1])
  //     })
  //   }, 10000)
  
  //   return () => clearInterval(interval)
  
  // },[receivedRecords])
  
  // function test (){
  //   console.log('calling test in records')
  
  //   client.query({
  //     query: gqlQueries.receivedRecords
  //   })
  //   .then((data) => {
  //     console.log(data, 'in records')
  //       setReceivedRecords(data.data.receivedRecords.data.result[0].value[1])
  //   })
  // }
  return(
    <div>
    Received Records
    </div>
  )
}



  module.exports = ReceivedRecords