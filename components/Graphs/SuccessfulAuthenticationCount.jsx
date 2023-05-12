import gqlQueries from "../../queries.jsx";
import { useQuery } from '@apollo/client';

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