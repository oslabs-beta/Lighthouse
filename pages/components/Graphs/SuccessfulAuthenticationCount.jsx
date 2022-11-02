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

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const dummyData = []

let x = (randomIntFromInterval(10, 1000))
let y = (randomIntFromInterval(10, 1000))
let z = (randomIntFromInterval(10, 1000))
let a = (randomIntFromInterval(10, 1000))


function SuccessfulAuthenticationCount() {

  return(
    <div>
    Successful Authentication Count
    </div>
  )
}



  module.exports = SuccessfulAuthenticationCount