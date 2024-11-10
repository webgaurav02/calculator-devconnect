import React, { useState } from 'react'
import './App.css'

//Importing components
import Calculator from './components/Calculator'
import Display from './components/Display'


const App = () => {

  const [res, setRes] = useState('')

  return (
    <div>
      <div className='calculator'>
        <h1 className='name'>Gaurav's Calculator</h1>
        <Display displayValue={res} />
        <Calculator res={res} setRes={setRes} />
      </div>
    </div>
  )
}

export default App