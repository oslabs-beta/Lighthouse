import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import gqlQueries from '../queries';
import { gql, useQuery } from "@apollo/client";
import client from "../apollo-client";


// Importing Navbar
// import SearchAppBar from "./components/Navbar/navbar.jsx"


// Importing graphs

//sus
import graphdata from './components/Graphs/graphdata.jsx';
//

import ActiveConnectionCount from "./components/Graphs/ActiveConnectionCount.jsx";
import ReceivedBytes from "./components/Graphs/ReceivedBytes.jsx";
import ReceivedRecords from "./components/Graphs/ReceivedRecords.jsx";
import RetainedBytes from "./components/Graphs/RetainedBytes.jsx";
import SuccessfulAuthenticationCount from "./components/Graphs/SuccessfulAuthenticationCount.jsx";
import PartitionCount from "./components/Graphs/PartitionCount.jsx";
import { ConstructionOutlined } from '@mui/icons-material';


  export default function Home({results}){


  return (
    <div className={styles.container}>
      <div id={styles.nav}>
        <h1 id={styles.title}>Lighthouse</h1>
        <h1 id={styles.github}>Github</h1>
        <h1 id={styles.profile}>Profile</h1>
      </div>

      <main className={styles.main}>


{<div className={styles.cardGrid1}>
        
        <div id = {styles.card}>
         <ReceivedBytes/>
        </div>

       <div id = {styles.card}>
        <RetainedBytes/>
        </div>

</div> }



<div className={styles.cardGrid2}>

        <div id = {styles.card}>
        <PartitionCount/>
        </div>

        <div id = {styles.card}>
        <ActiveConnectionCount/>
        </div>
        
        <div id = {styles.card}>
        <ReceivedRecords/>
        </div>

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
console.log('hi')
  return {
    props: {
      results
    },
 };
}


