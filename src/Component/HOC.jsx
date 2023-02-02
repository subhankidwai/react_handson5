import React,{useState} from 'react'

const HOC=(WrappedComponent)=>{
function HOC() {
    const [counter,setCounter]=useState(0);
    const UpdateCounter=()=>{
        setCounter(counter+1)
    }
  return (
    <div>
        <WrappedComponent counter={counter} UpdateCounter={UpdateCounter}/>
    </div>
  )
}
return HOC;
}
export default HOC