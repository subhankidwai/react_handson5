import React from 'react'
import ClickCounter from './Component/ClickCounter'
import HoverCounter from './Component/HoverCounter'
import './App.css'

const App = () => {
  return (
    <div className='con'>
      <h1>Counter Using Higher Order Component</h1>
      <ClickCounter/>
      <HoverCounter/>
    </div>
  )
}

export default App