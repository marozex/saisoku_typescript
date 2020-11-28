import React from 'react'
import { Radar } from 'react-chartjs-2'

const data = {
  labels: ['React', 'Vue', 'Angular', 'JS', 'TS'],
  datasets: [
    {
      label: 'PersonA',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: '#008b8b',
      pointBackgroundColor: '#008b8b8',
      pointBorderColor: '#fff',
      data: [100, 29, 30, 10, 16]
    },
    {
      label: 'PersonB',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: '#fff1493',
      pointBackgroundColor: '#fff1493',
      pointBorderColor: '#fff',
      data: [1, 29, 40, 70, 66]
    }
  ]
}

const RaderPlot: React.FC = () => {
  return (
    <div>
      <Radar data={data} />
    </div>
  )
}

export default RaderPlot
