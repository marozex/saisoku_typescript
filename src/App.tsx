import React from 'react'
import logo from './logo.svg'
import './App.css'
import TestComponent from './TestComponent'

let username: string = 'Hello'

let dummy: number = 1

const func1 = (x: number, y: number) => x + y

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hogehoge" />
      </header>
    </div>
  )
}

export default App
