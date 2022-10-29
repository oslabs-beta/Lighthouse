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
import { useEffect, useState } from 'react';


  export default function Home({results}){

  const [receivedRecords, setReceivedRecords] = useState(0);
  const [prometheus, setPrometheus] = useState(0);
  const [activeConnectionCount, setActiveConnectionCount] = useState(0);
  const [successfulAuthCount, setSuccessfulAuthCount] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      client.refetchQueries({
        include: "active"
      })
      .then((data) => {
        data.forEach((element) => {
          
          if (element.data.prometheus){
            setPrometheus(element.data.prometheus.data.result[0].value[1])
          }
          else if (element.data.receivedRecords){
           setReceivedRecords(element.data.receivedRecords.data.result[0].value[1])
          } 
          else if (element.data.activeConnectionCount){
            setActiveConnectionCount(element.data.activeConnectionCount.data.result[0].value[1])
          }
          else {
            setSuccessfulAuthCount(element.data.successfulAuthenticationCount.data.result[0].value[1])
          }
        })
      })
    }, 5000)
      
    return () => clearInterval(interval);
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
         <ReceivedBytes />
        </div>

       <div id = {styles.card}>
        <RetainedBytes />
        </div>

</div> }



<div className={styles.cardGrid2}>

        <div id = {styles.card}>
        <PartitionCount results = {prometheus}/>
        </div>

        <div id = {styles.card}>
        <ActiveConnectionCount results = {activeConnectionCount}/>
        </div>
        
        <div id = {styles.card}>
        <ReceivedRecords results = {receivedRecords}/>
        </div>

        <div id = {styles.card}>
        <SuccessfulAuthenticationCount results = {successfulAuthCount}/>
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


