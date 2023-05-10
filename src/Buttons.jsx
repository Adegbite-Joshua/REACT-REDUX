import React from 'react'

const Buttons = ({inc, dec}) => {
  return (
    <>
        <button onClick={inc}>Increase</button>
        <button onClick={dec}>Decrease</button>
    </>
  )
}

export default Buttons