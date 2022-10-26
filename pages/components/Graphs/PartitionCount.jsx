import gqlQueries from "../../../queries";
import { useEffect, useState } from "react";
import { gql, useQuery } from '@apollo/client';
import client from "/home/level2zombie/Lighthouse/apollo-client.js";




function PartitionCount() {
const [partitionCount, setPartitionCount] = useState(0);
const {loading, error, data} = useQuery(gqlQueries.partitionCount);
  
  //will return a gql fetch result every x seconds

  return(
    <div>
      <div>Partition Count</div>
      {partitionCount}
    </div>
  )
}



  module.exports = PartitionCount