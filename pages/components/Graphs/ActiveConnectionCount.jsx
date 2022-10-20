// import React, { useState, useEffect } from "react";
// import 'chartjs-adapter-luxon';
// import { Chart, LinearScale } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import StreamingPlugin from 'chartjs-plugin-streaming';
// import { gql, useQuery } from "@apollo/client";
// import client from "/Users/nao/codesmith/Lighthouse/apollo-client.js";


// Chart.register(StreamingPlugin);
 

// // every 1000ms, checking prometheus for an updated metric that will be displayed on the y-axis
// let number =  7;

// // (function repeat() {

// //   fetch request to ApolloServer querying to Prometheus goes here
// //   const res = await fetch('')
// //   const activeConnectionCountData = await res.json();
// //   const activeConnections = client.query({
// //     query: gql`
// //     query Query {
// //       activeConnectionCount {
// //         data {
// //           result {
// //             value
// //           }
// //         }
// //       }
// //     }
// //     `,
// //   })
// //   .then((data) => {
// //     number = data;
// //   })
// //   //  number = Math.random();
// //   console.log(number)
// //    setTimeout(repeat, 1000);
// // })();


// function ActiveConnectionCount() {
//     return (
//     <Line
//       data={{
//         datasets: [{
//           label: 'Active Connection Count',
//           backgroundColor: '#648c84',
//           borderColor: '#cdf3e9',
//           cubicInterpolationMode: 'monotone',
//           fill: true,
//           data: []
//         }]
//       }}
//       options={{
//         scales: {
//           x: {
//             type: 'realtime',
//             realtime: {
//               delay: 1000,
//               onRefresh: chart => {
//                 chart.data.datasets.forEach(dataset => {
//                   dataset.data.push({
//                     x: Date.now(),
//                     y: number
//                   });
//                 });
//               }
//             }
//           }
//         }
//       }}
//     />
//   );
// };
//   module.exports = ActiveConnectionCount