import React, { useState, useEffect } from "react";
import 'chartjs-adapter-luxon';
import { Chart, LinearScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import StreamingPlugin from 'chartjs-plugin-streaming';
import { gql, useQuery } from "@apollo/client";
import gqlQueries from "../../../queries";
import client from "../../../apollo-client";

Chart.register(StreamingPlugin, LinearScale);

var number;

(function repeat() {
  let date = Math.floor((new Date().getTime()/1000)) - 500;
  fetch(`http://34.162.127.11:9090/api/v1/query?query=confluent_kafka_server_retained_bytes&time=${date}`)
  .then((response) => response.json())
  .then((data) => number = data.data.result[1].value[1]) 
  setTimeout(repeat, 1000);
})();

function RetainedBytes() {

    return (
    <Line
      data={{
        datasets: [{
          label: 'Retained Bytes',
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
                  dataset.data.push({
                    x: Date.now(),
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

export default React.memo(RetainedBytes);