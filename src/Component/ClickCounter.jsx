import React from 'react'
import HOC from './HOC'

const ClickCounter = (props) => {
  console.log(props.counter)
  const counter=props.counter
  const UpdateCounter=props.UpdateCounter
   
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={UpdateCounter}>ClickCounter</button>
    </div>
  )
}

// export default ClickCounter
export default HOC(ClickCounter)