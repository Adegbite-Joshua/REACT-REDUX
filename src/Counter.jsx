import React, { useState } from 'react'
import Buttons from './Buttons'

const Counter = () => {
    const [num, setnum] = useState(0)
    const inc =()=>{
        setnum((c)=>c+1)
    }
    const dec =()=>{
        setnum((c)=>c+1)
    }
    
  return (
    <>
        <h3>{num}</h3>
        <Buttons inc={inc} dec={dec}/>
    </>
  )
}

export default Counter