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


function ReceivedBytes(props) {
//  const {loading, error, data} = useQuery(gqlQueries.receivedBytes);

 
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
                    y: 1
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
  module.exports = ReceivedBytes