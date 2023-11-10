import React, { useState } from 'react'
import Fetchdata from './Fetchdata'

export default function Input() {

    const [input, setInput] = useState('chicken')
    const handleSubmit = (event)=>{
        event.preventDefault()        
        
        setInput(event.target[0].value)        

    }
  return (  
    <>
    <h3>Oh, no! You seem to have wandered into a food desert!
You must be hungry...</h3>
    <form className='form-input' onSubmit={handleSubmit} >
        <input type='text' placeholder='Find the best Recipes from across the web' className='input'/>
        <button type='submit' className='searchbtn' >Search</button>
      </form>
      <Fetchdata input={input} />
    </> 
      
      
    
  )
}
