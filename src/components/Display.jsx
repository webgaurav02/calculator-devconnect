import React from 'react'
import '../App.css'

const Display = (props) => {
  return (
    <div className='display'>{props.displayValue}</div>
  )
}

export default Display