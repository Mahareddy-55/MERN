import React ,{useMemo, useState}from 'react'

const UseMemo = () => {
    const [count,setcount]=useState(0);
    const[number,setnumber]=useState(0);
    const cubeNum=(num) =>{
        console.log("Calculating done...");
        return Math.pow(num,3);
    }
    const result = useMemo(() => 
        { return cubeNum(number)}, [number]);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick ={()=>setcount(count+1)}>Count++</button>
        <input type="number"  onChange={e => setnumber(e.target.value)} />
        <p>Cube of the number is {result}</p>
      
    </div>
  )
}

export default UseMemo
