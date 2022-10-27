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
import { useEffect } from 'react';


  export default function Home({results}){
  let fetchResults = [];

  useEffect(() => {
    const interval = setInterval(() => {
      client.refetchQueries({
        include: "active"
      })
      .then((data) => {
        console.log(data)
        fetchResults = data;
        console.log('this is fetch results', fetchResults)
      })
    }, 2000)
      
    return () => clearInterval(interval)
  })


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
         <ReceivedBytes results = {fetchResults}/>
        </div>

       <div id = {styles.card}>
        <RetainedBytes results = {fetchResults}/>
        </div>

</div> }



<div className={styles.cardGrid2}>

        <div id = {styles.card}>
        <PartitionCount results = {fetchResults}/>
        </div>

        <div id = {styles.card}>
        <ActiveConnectionCount results = {fetchResults}/>
        </div>
        
        <div id = {styles.card}>
        <ReceivedRecords results = {'hi'}/>
        </div>

        <div id = {styles.card}>
        <SuccessfulAuthenticationCount results = {fetchResults}/>
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


