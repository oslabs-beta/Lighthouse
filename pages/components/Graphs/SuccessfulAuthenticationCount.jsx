import gqlQueries from "../../../queries";
import { useEffect, useState } from "react";
import { gql, useQuery } from '@apollo/client';
import client from "../../../apollo-client";




function SuccessfulAuthenticationCount(props) {
const [authCount, setAuthCount] = useState(0);
const {loading, error, data} = useQuery(gqlQueries.authCount);

useEffect(() => {
    console.log(props)
})

  return(
    <div>
      <div>Successful Authentication Count</div>
      {authCount}
    </div>
  )
}



  module.exports = SuccessfulAuthenticationCount;