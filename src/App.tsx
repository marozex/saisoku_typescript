import React from 'react'
import logo from './logo.svg'
import './App.css'
import TestComponent from './TestComponent'
import LinePlot from './components/LinePlot'
import PiePlot from './components/PiePlot'
import BarPlot from './components/BarPlot'
import RaderPlot from './components/RaderPlot'
import BubblePlot from './components/BubblePlot'
import MaterialUI from './components/MaterialUI'

let username: string = 'Hello'

let dummy: number = 1

const func1 = (x: number, y: number) => x + y

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <TestComponent text="hogehoge" />
      <LinePlot />
      <PiePlot />
      <BarPlot />
      <RaderPlot />
      <BubblePlot/> */}
      <MaterialUI/>
    </div>
  )
}

export default App
