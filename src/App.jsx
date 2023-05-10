import { useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import './App.css'
import Counter from './Counter'

function App() {
  const getStore = useSelector((state)=>state)
  console.log(getStore)
  return (
    <>
        {/* <Counter/> */}
    </>
  )
}

export default App
