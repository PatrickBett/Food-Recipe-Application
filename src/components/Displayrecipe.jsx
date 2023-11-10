import React, { useState } from 'react';
import Itemdetail from './Itemdetail';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Displayrecipe({ recipe }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSeeMoreClick = (rec) => {
    setSelectedRecipe(rec);
  };

  return (
    <Router>
      <div>
        <div className="item-recipe">
          {recipe.map((rec) => (
            <div key={rec.recipe.label} className='recipe'>
              <h2>{rec.recipe.label}</h2>
              <img src={rec.recipe.image} className='image' />
              <h5>Calories: {rec.recipe.calories}</h5>

              {/* Button to set the selected recipe */}
              <button className='seemoreBtn' onClick={() => handleSeeMoreClick(rec)}>
                See More
              </button>
            </div>
          ))}
        </div>

        {/* Conditionally render Itemdetail based on the selected recipe */}
        {selectedRecipe && (
          <Itemdetail key={selectedRecipe.recipe.label} rec={selectedRecipe} />
        )}
      </div>
    </Router>
  );
}
