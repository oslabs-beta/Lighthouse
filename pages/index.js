import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import gqlQueries from '../queries';
import { gql, useQuery } from "@apollo/client";
import client from "../apollo-client";


// Importing Navbar
// import SearchAppBar from "./components/Navbar/navbar.jsx"


// Importing graphs
import ActiveConnectionCount from "./components/Graphs/ActiveConnectionCount.jsx";
import ReceivedBytes from "./components/Graphs/ReceivedBytes.jsx";
import ReceivedRecords from "./components/Graphs/ReceivedRecords.jsx";
import RetainedBytes from "./components/Graphs/RetainedBytes.jsx";
import SentBytes from "./components/Graphs/SentBytes.jsx";
import SentRecords from "./components/Graphs/SentRecords.jsx";
import SuccessfulAuthenticationCount from "./components/Graphs/SuccessfulAuthenticationCount.jsx";
import PartitionCount from "./components/Graphs/PartitionCount.jsx";
import { ConstructionOutlined } from '@mui/icons-material';


  export default function Home({results}){
  // console.log(results)
  return (
    <div className={styles.container}>
      <div id={styles.nav}>
        <h1 id={styles.title}>Lighthouse</h1>
        <h1 id={styles.github}>Github</h1>
        <h1 id={styles.profile}>Profile</h1>
      </div>

      <main className={styles.main}>


{/* <div className={styles.cardGrid1}>
        
        <div id = {styles.card}>
         <ActiveConnectionCount/>
        </div>

       <div id = {styles.card}>
        <RetainedBytes/>
        </div>

</div> */}



<div className={styles.cardGrid2}>

        <div id = {styles.card}>
        {/* <PartitionCount/> */}
        {/* {results.partitionCount.data.prometheus.data.result[0].value[1]} */}
        </div>

        <div id = {styles.card}>
        <ReceivedBytes/>
        {/* {results.receivedBytes.data.receivedBytes.data.result[0].value[1]} */}
        </div>
        
        <div id = {styles.card}>
        <ReceivedRecords/>
        {/* {receivedRecords} */}
        </div>

        <div id = {styles.card}>
        <SentBytes/>
        {/* {sentBytes} */}
        </div>

        <div id = {styles.card}>
        <SentRecords/>
        {/* {sentRecords} */}
        {}
        </div >

        <div id = {styles.card}>
        <SuccessfulAuthenticationCount/>
        </div>

</div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
const results = {};
results.partitionCount = await client.query({
  query: gqlQueries.partitionCount
})
// results.receivedBytes = await client.query({
//   query: gqlQueries.receivedBytes
// })
results.sentRecords = await client.query({
  query: gqlQueries.sentRecords
})
results.receivedRecords = await client.query({
  query: gqlQueries.receivedRecords
})
results.authCount = await client.query({
  query: gqlQueries.authCount
})

  return {
    props: {
      results
    },
 };
}


