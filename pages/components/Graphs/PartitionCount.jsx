import gqlQueries from "../../../queries";
import { useEffect, useState } from "react";
import { gql, useQuery } from '@apollo/client';
import client from "../../../apollo-client";

function PartitionCount(props) {
const {loading, error, data} = useQuery(gqlQueries.partitionCount);

const count = props.results;

  return(
    <div>
      <div>Partition Count</div>
      {count}
    </div>
  )
}

module.exports = PartitionCount