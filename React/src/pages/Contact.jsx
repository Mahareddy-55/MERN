import React ,{ useState }from 'react'
import Service from './Service';

const Contact = ({props}) => {
  const [name,setName]=useState("maha");
  const toggleName =() =>{
    setName(name==="maha"?"mathi":"maha")
  }
  return (
    <div>
      <h1>Name: {name}</h1>
      <button  onClick={toggleName}>Toggle</button>
    </div>
  )
}

export default Contact
