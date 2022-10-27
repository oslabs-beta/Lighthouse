import gqlQueries from "../../../queries";
import { useEffect, useState } from "react";
import { gql, useQuery } from '@apollo/client';
import client from "../../../apollo-client";




function PartitionCount() {
const [partitionCount, setPartitionCount] = useState(0);
const {loading, error, data} = useQuery(gqlQueries.partitionCount);
  
useEffect(() => {
  
})

  return(
    <div>
      <div>Partition Count</div>
      {partitionCount}
    </div>
  )
}



  module.exports = PartitionCount