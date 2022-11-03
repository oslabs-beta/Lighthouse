import gqlQueries from "../../../queries";
import { useEffect, useState } from "react";
import { gql, useQuery } from '@apollo/client';
import client from "../../../apollo-client";




function SuccessfulAuthenticationCount(props) {

const {loading, error, data} = useQuery(gqlQueries.authCount);

  return(
    <div>
      <div>Successful Authentication Count</div>
      {props.results}
    </div>
  )
}



  module.exports = SuccessfulAuthenticationCount;