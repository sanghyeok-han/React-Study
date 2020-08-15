import React from 'react';
import Hello from './Hello'
import './App.css'


function App() {
  const name = "react"
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem"
  }
  return (
    <>
      {/* 주석이다. */}
      <div>
        <Hello
          // 주석이다.
        />
        <Hello/>
        <Hello/>
      </div>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>

      <Hello/>
    </>
  )
}

export default App;
