import gqlQueries from "../../queries.jsx";
import { useQuery } from '@apollo/client';


function ReceivedRecords(props) {
  const {loading, error, data} = useQuery(gqlQueries.receivedRecords);
  let record = props.results

  return(
    <div>
    Received Records
    <div> {record ? record : 0}</div>
    </div>
  )
}

module.exports = ReceivedRecords