import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="flex flex-wrap flex-row gap-3 h-screen w-screen">
        <div className="bg-pink-500 h-[100px] w-full"></div>
        <div className="flex flex-wrap h-[calc(100vh-206px)] w-full">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="bg-pink-500 h-[100px] w-full"></div>
    </div>
  )
}

export default App
