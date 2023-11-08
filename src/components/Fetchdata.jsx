import React, { useEffect, useState } from 'react'
import Displayrecipe from './Displayrecipe'

export default function Fetchdata({input}) {
    
    const [recipe, setRecipe] = useState([])

    useEffect(()=>{ 
        try{
            const fetchData = async()=>{
            
            const API_ID ="9643d3f6"
            const API_KEY = "b4e21e9906c8c1228a5ed97357a65f5e"
            const url = `https://api.edamam.com/search?q=${input}&app_id=${API_ID}&app_key=${API_KEY}`
            
            const response = await fetch(url)
            const data = await response.json()
        
            setRecipe(data.hits)  
            console.log(data.hits)                 
           }
           fetchData()

        } 
        catch(error){
            console.log(error)

        }     
     },[])

    
    
  return (
    <div>
      
      {/* passed the data to Displayrecipe component as an array */}
      <Displayrecipe recipe = {recipe} />
    </div>
  )
}
