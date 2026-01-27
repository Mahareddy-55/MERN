import React from 'react'
import { useState } from 'react'

const Counter = () => {
    
    const handleDecrement = () => {
setCount(count-1);
    }
    const handleReset = () => {
      setCount(0);
    }
    const handleIncrement  = () => {
      setCount(count+1);
    }

  return (
    <div>
      
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button> 
      <button onClick={handleIncrement}>Increment</button>

    </div>
  )
}

export default Counter
