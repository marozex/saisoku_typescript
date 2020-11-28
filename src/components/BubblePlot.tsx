import React from 'react'
import { Bubble } from 'react-chartjs-2'

const data = {
  labels: ['Win', 'Mac', 'Linux'],
  datasets: [
    {
      label: 'React',
      backgroundColor: 'blue',
      borderColor: 'transparent',
      data: { x: 20, y: 800, r: 63.5 }
    },
    {
      label: 'Angular',
      backgroundColor: 'red',
      borderColor: 'transparent',
      data: { x: 30, y: 400, r: 1.2 }
    },
    {
      label: 'Vue',
      backgroundColor: 'green',
      borderColor: 'transparent',
      data: { x: 10, y: 700, r: 1.7 }
    }
  ]
}

const options = {
  title: {
    display: true,
    fontSize: 18,
    text: 'npm downloads'
  },
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labesString: 'num of japan',
          fontSize: 18
        },
        ticks: {
          min: 0,
          max: 1200,
          fontSize: 14
        }
      }
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labesString: 'learn cost',
          fontSize: 18
        },
        ticks: {
          min: 5,
          max: 35,
          fontSize: 14
        }
      }
    ]
  }
}

const BubblePlot: React.FC = () => {
  return (
    <div>
      <Bubble data={data} options={options} />
    </div>
  )
}

export default BubblePlot
