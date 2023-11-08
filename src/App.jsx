import { useState } from 'react'
import './App.css'
import Fetchdata from './components/Fetchdata'
import Input from './components/Input'

function App() {

  return (
    <>
    
      <h1 className='title'>FOOD RECIPE</h1>
    
    <div className='recipe-container'>      
      <Input />
      
      </div>               
    </>
  )
}

export default App
