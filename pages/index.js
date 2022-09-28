import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
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


export default function Home({ countries }) {
  return (
    <div className={styles.container}>
      <div id={styles.nav}>
        <h1 id={styles.title}>Lighthouse</h1>
        <h1 id={styles.github}>Github</h1>
        <h1 id={styles.profile}>Profile</h1>
      </div>

      <main className={styles.main}>


<div className={styles.cardGrid1}>
        
        <div id = {styles.card}>
         <ActiveConnectionCount/>
        </div>

       <div id = {styles.card}>
        <RetainedBytes/>
        </div>

</div>



<div className={styles.cardGrid2}>

        <div id = {styles.card}>
        <PartitionCount/>
        0
        {/* Put number here */}
        </div>

        <div id = {styles.card}>
        <ReceivedBytes/>
        0
        </div>
        
        <div id = {styles.card}>
        <ReceivedRecords/>
        0
        </div>

        <div id = {styles.card}>
        <SentBytes/>
        0
        </div>

        <div id = {styles.card}>
        <SentRecords/>
        0
        </div >

        <div id = {styles.card}>
        <SuccessfulAuthenticationCount/>
        0
        </div>

</div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
 };
}