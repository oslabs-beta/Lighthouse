import styles from '../styles/Home.module.css'
import client from "../apollo-client";
import NavBar from "../components/Navbar/navbar"
import ActiveConnectionCount from "../components/Graphs/ActiveConnectionCount.jsx";
import ReceivedBytes from "../components/Graphs/ReceivedBytes.jsx";
import ReceivedRecords from "../components/Graphs/ReceivedRecords.jsx";
import RetainedBytes from "../components/Graphs/RetainedBytes.jsx";
import SuccessfulAuthenticationCount from "../components/Graphs/SuccessfulAuthenticationCount.jsx";
import PartitionCount from "../components/Graphs/PartitionCount.jsx";
import { useEffect, useState } from 'react';


export default function Home() {

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

            if (element.data.prometheus) {
              setPrometheus(element.data.prometheus.data.result[0].value[1])
            }
            if (element.data.receivedRecords) {
              setReceivedRecords(element.data.receivedRecords.data.result[0].value[1])
            }
            if (element.data.activeConnectionCount) {
              setActiveConnectionCount(element.data.activeConnectionCount.data.result[0].value[1])
            }
            if (element.data.successfulAuthenticationCount) {
              setSuccessfulAuthCount(element.data.successfulAuthenticationCount.data.result[0].value[1])
            }
          })
        })
    }, 5000)

    return () => clearInterval(interval);
  }, [])

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.cardGrid1}>

          <div id={styles.card}>
            <ReceivedBytes />
          </div>

          <div id={styles.card}>
            <RetainedBytes />
          </div>

        </div>



        <div className={styles.cardGrid2}>

          <div id={styles.card}>
            <PartitionCount results={prometheus} />
          </div>

          <div id={styles.card}>
            <ActiveConnectionCount results={activeConnectionCount} />
          </div>

          <div id={styles.card}>
            <ReceivedRecords results={receivedRecords} />
          </div>

          <div id={styles.card}>
            <SuccessfulAuthenticationCount results={successfulAuthCount} />
          </div>
        </div>

    </div>
  )
}

