import React from 'react';
import 'chartjs-adapter-luxon';
import { Chart } from 'chart.js';
import { Line } from 'react-chartjs-2';
import StreamingPlugin from 'chartjs-plugin-streaming';



Chart.register(StreamingPlugin);
 
let number;
let API = process.env.RECEIVEDBYTES_API;

(function repeat() {
  let date = Math.floor((new Date().getTime()/1000)) - 500;
  fetch(API)
  .then((response) => response.json())
  .then((data) => number = data.data.result[0].value[1])
  setTimeout(repeat, 1000);
})();

function ReceivedBytes(props) {

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
