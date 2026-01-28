import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const navigate = useNavigate();
  const handleclick = () =>{
    navigate('/about')
  }
  return (
    <div>
      <h1>Name: {props.name} </h1>
      <button onClick={handleclick}> Go to about page</button>
      <About name = {name}/>
    </div>
  )
}

export default Home
 