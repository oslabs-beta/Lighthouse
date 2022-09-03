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



function ActiveControllersGraph() {
  



  
  //Chart Data state
  const [ chartData, setChartData ] = useState({
    datasets: [1,2,3,4]
  })


  //You can configure the legend title and tooltip in the chartOptions
  const [ chartOptions, setChartOptions ] = useState({

  })
 
  useEffect(() => {
console.log(chartData)
    setChartData({
      // Below is the x axis data
      labels: [2,3,4,5,6], 
      datasets: [
        {
          label: "Active Controllers",
          // Below is the y axis data
          data: [1,2,3,4,512,31,312,31,3221,3,123,12,31],
          borderColor: "rgba(53,162,235,0.4)",
          backgroundColor: "rgba(53,162,235,0.4)"
        }
      ]
    }) 

    console.log(chartData.labels)
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Active Controllers",
        }
      },
    })
  }, [])
  
  
  return(
    <div>
    <Line options={ chartOptions } data={chartData}/>
    </div>
  )
}



  module.exports = { ActiveControllersGraph }