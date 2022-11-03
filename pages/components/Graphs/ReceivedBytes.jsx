import React, { useState, useEffect } from "react";
import 'chartjs-adapter-luxon';
import { Chart, LinearScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import StreamingPlugin from 'chartjs-plugin-streaming';
import { gql, useQuery } from "@apollo/client";
import gqlQueries from "../../../queries";
import client from "../../../apollo-client";


Chart.register(StreamingPlugin);
 

// every 1000ms, checking prometheus for an updated metric that will be displayed on the y-axis
// let number =  7;

// (function repeat() {

//    number = Math.random();
//    setTimeout(repeat, 1000);
// })();

// every 5000ms, make a HTTP request to the PROM endpoint
let number

(function repeat() {
  let date = Math.floor((new Date().getTime()/1000)) - 500;
  fetch(`http://34.162.127.11:9090/api/v1/query?query=confluent_kafka_server_received_bytes&time=${date}`)
  .then((response) => response.json())
  .then((data) => number = data.data.result[0].value[1])
  setTimeout(repeat, 1000);
})();

// (function repeat() {
//   let date = Math.floor((new Date().getTime()/1000)) - 500;
//   fetch(`http://34.162.127.11:9090/api/v1/query?query=confluent_kafka_server_received_bytes&time=${date}`)
//   .then((response) => response.json())
//   .then((data) => console.log("we got the data back: ", data.data.result[0].value[1]));
//   setTimeout(repeat, 10000);
// })();

function ReceivedBytes(props) {
//  const {loading, error, data} = useQuery(gqlQueries.receivedBytes);
  console.log(props.results)
    return (
    <Line
      data={{
        datasets: [{
          label: 'Received Bytes',
          backgroundColor: '#648c84',
          borderColor: '#cdf3e9',
          cubicInterpolationMode: 'monotone',
          fill: true,
          data: []
        }]
      }}
      options={{
        scales: {
          x: {
            type: 'realtime',
            realtime: {
              delay: 1000,
              onRefresh: chart => {
                chart.data.datasets.forEach(dataset => {
                  console.log(props);
                  dataset.data.push({
                    x: Date.now(),
                    // y: props?.results[4]?.data?.receivedBytes?.data?.result[0]?.value[1]
                    y: number
                  });
                });
              }
            }
          }
        }
      }}
    />
  );
};

export default React.memo(ReceivedBytes);
// module.exports = ReceivedBytes