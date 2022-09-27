// import React, { useState, useEffect } from "react";

// import {
//     Chart as ChartJS,
//     ArcElement,
//   LineElement,
//   BarElement,
//   PointElement,
//   BarController,
//   BubbleController,
//   DoughnutController,
//   LineController,
//   PieController,
//   PolarAreaController,
//   RadarController,
//   ScatterController,
//   CategoryScale,
//   LinearScale,
//   LogarithmicScale,
//   RadialLinearScale,
//   TimeScale,
//   TimeSeriesScale,
//   Decimation,
//   Filler,
//   Legend,
//   Title,
//   Tooltip,
//   SubTitle

//   } from 'chart.js';

//   import { Line } from "react-chartjs-2"
  
//   ChartJS.register(
//     ArcElement,
//   LineElement,
//   BarElement,
//   PointElement,
//   BarController,
//   BubbleController,
//   DoughnutController,
//   LineController,
//   PieController,
//   PolarAreaController,
//   RadarController,
//   ScatterController,
//   CategoryScale,
//   LinearScale,
//   LogarithmicScale,
//   RadialLinearScale,
//   TimeScale,
//   TimeSeriesScale,
//   Decimation,
//   Filler,
//   Legend,
//   Title,
//   Tooltip,
//   SubTitle

//   );

// function randomIntFromInterval(min, max) { // min and max included 
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

// const dummyData = []

// let x = (randomIntFromInterval(10, 1000))
// let y = (randomIntFromInterval(10, 1000))
// let z = (randomIntFromInterval(10, 1000))
// let a = (randomIntFromInterval(10, 1000))


// function RetainedBytes() {
  
//   //Chart Data state
//   const [ chartData, setChartData ] = useState({
//     datasets: []
//   })


//   //You can configure the legend title and tooltip in the chartOptions
//   const [ chartOptions, setChartOptions ] = useState({

//   })

//   useEffect(() => {
//     setChartData({
//       // Below is the x axis data
//       labels: ["1", "2", "3", "4"],
//       datasets: [
//         {
//           label: "Retained Bytes",
//           // Below is the y axis data
//           data: [x, y, z, a],
//           borderColor: "rgba(53,162,235,0.4)",
//           backgroundColor: "rgba(53,162,235,0.4)"
//         }
//       ]
//     }) 
//     setChartOptions({
//       responsive: true,
//       plugins: {
//         legend: {
//           position: "top"
//         },
//         title: {
//           display: true,
//           text: "Retained Bytes",
//         }
//       },
//     })
//   }, [])
  
  
//   return(
//     <div>
//     <Line options={ chartOptions } data={chartData}/>
//     </div>
//   )
// }



//   module.exports = RetainedBytes

import React, { useState, useEffect } from "react";
import 'chartjs-adapter-luxon';
import { Chart, LinearScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import StreamingPlugin from 'chartjs-plugin-streaming';


Chart.register(StreamingPlugin, LinearScale);
 

// every 1000ms, checking prometheus for an updated metric that will be displayed on the y-axis
var number;

(function repeat() {

  // fetch request to ApolloServer querying to Prometheus goes here
  // const res = await fetch('')
  // const retainedBytesData = await res.json();

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