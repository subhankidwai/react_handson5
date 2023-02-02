import React from 'react'
import HOC from './HOC'

const HoverCounter = (props) => {
  const counter=props.counter
  console.log(props.counter)
  const UpdateCounter=props.UpdateCounter
  return (
    <div>
        <h1>{counter}</h1>
        <button onMouseOver={UpdateCounter}>HoverCounter</button>
    </div>
  )
}

export default HOC(HoverCounter)