import React,{useEffect,useState} from 'react'

const UseEffect = () => {
    const[count, setCount]=React.useState(0);
    const[value, setValue]=React.useState(0);
    
    
    useEffect(() => {
        console.log("useEffect Mounted");
    } ,[count,value])
  return (
    <div>
   <h1> {count}</h1>
   <button onClick={()=>setCount(count+1)}>Increment</button>
   <h2>{value}</h2>
    <button onClick={()=>setValue(value+1)}>Increment</button>
   
      </div>
  )
}

export default UseEffect
