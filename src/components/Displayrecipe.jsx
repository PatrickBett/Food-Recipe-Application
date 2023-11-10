import React from 'react'
import Itemdetail from './Itemdetail'




export default function Displayrecipe({recipe}) {
    console.log(recipe)
    
    
  return (
    <div>
        <div className="item-recipe">
         {recipe.map((rec)=>(            
            <div key={rec.recipe.label} className='recipe'>
                <h2>{rec.recipe.label}</h2>
                <img src={rec.recipe.image} className='image' />
                <h5>Calories: {rec.recipe.calories}</h5>
                {/* <Router>
                <Link to='/itemdetails' path='' > */}
                     <button className='seemoreBtn'>
                       See More
                     </button>
                {/* </Link>
                <Route path='/itemdetails' Component={Itemdetail} />
                </Router> */}
               

                <Itemdetail rec={rec}/>
            </div>
            
))}
            
        </div>
        
      
    </div>
  )
}