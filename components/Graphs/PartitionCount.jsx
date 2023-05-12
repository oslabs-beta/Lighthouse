import gqlQueries from "../../queries.jsx";
import { useQuery } from '@apollo/client';

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