
import React, { useState, useEffect } from "react";
import 'chartjs-adapter-luxon';
import { Chart, LinearScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import StreamingPlugin from 'chartjs-plugin-streaming';


Chart.register(StreamingPlugin, LinearScale);
 

// every 1000ms, checking prometheus for an updated metric that will be displayed on the y-axis
var number;

(function repeat() {


   number = Math.random();
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



  module.exports = RetainedBytes