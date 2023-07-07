import React, { useState, useEffect, useContext } from 'react';
import 'chartjs-adapter-luxon';
import { Chart } from 'chart.js';
import { Line } from 'react-chartjs-2';
import StreamingPlugin from 'chartjs-plugin-streaming';
import { AuthContext } from '../Login/AuthContext'

Chart.register(StreamingPlugin);

function ReceivedBytes() {
  const { auth } = useContext(AuthContext); 
  const [number, setNumber] = useState(null);

  // Modified fetch to a useEffect with dependency on Auth to prevent unnecessary server requests
  useEffect(() => {
    if (auth.token) {
      (function repeat() {
        let date = Math.floor((new Date().getTime()/1000)) - 500;
        let RECEIVEDBYTES_API = `${process.env.PROMETHEUS_API}/api/v1/query?query=confluent_kafka_server_received_bytes&time=${date}`;
        fetch(RECEIVEDBYTES_API)
        .then((response) => response.json())
        .then((data) => setNumber(data.data.result[0].value[1]))
        setTimeout(repeat, 1000);
      })();
    }
  }, [auth.token]);

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

export default React.memo(ReceivedBytes);
