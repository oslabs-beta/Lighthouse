import React, { useState, useEffect } from "react";

import {
    Chart as ChartJS,
    ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle

  } from 'chart.js';

  import { Line } from "react-chartjs-2"
  
  ChartJS.register(
    ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle

  );

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const dummyData = []

let x = (randomIntFromInterval(10, 1000))
let y = (randomIntFromInterval(10, 1000))
let z = (randomIntFromInterval(10, 1000))
let a = (randomIntFromInterval(10, 1000))


function SentBytes() {
  
  //Chart Data state
  const [ chartData, setChartData ] = useState({
    datasets: []
  })


  //You can configure the legend title and tooltip in the chartOptions
  const [ chartOptions, setChartOptions ] = useState({

  })

  useEffect(() => {
    setChartData({
      // Below is the x axis data
      labels: ["1", "2", "3", "4"],
      datasets: [
        {
          label: "Sent Bytes",
          // Below is the y axis data
          data: [x, y, z, a],
          borderColor: "rgba(53,162,235,0.4)",
          backgroundColor: "rgba(53,162,235,0.4)"
        }
      ]
    }) 
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Sent Bytes",
        }
      },
    })
  }, [])
  
  
  return(
    <div>
    Sent Bytes
    </div>
  )
}



  module.exports = SentBytes