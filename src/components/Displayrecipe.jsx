import React from 'react'

export default function Displayrecipe({recipe}) {
    //console.log(recipe)
    
    
  return (
    <div>
        <div className="item-recipe">
         {recipe.map((rec)=>(            
            <div key={rec.recipe.label} className='recipe'>
                <h2>{rec.recipe.label}</h2>
                <img src={rec.recipe.image} className='image' />
                <h5>Calories: {rec.recipe.calories}</h5>
                <button className='seemoreBtn'>See More</button>
            </div>
            
))}
            
        </div>
      
    </div>
  )
}
