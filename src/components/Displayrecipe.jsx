import React, { useState } from 'react';
import Itemdetail from './Itemdetail';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
              <img src={rec.recipe.image} alt={rec.recipe.label} className='image' />
              <h5>Calories: {rec.recipe.calories}</h5>

              {/* Button to set the selected recipe */}
              <Link to={`/itemdetails/${encodeURIComponent(rec.recipe.label)}`}>
                <button className='seemoreBtn' onClick={() => handleSeeMoreClick(rec)}>
                  See More
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Conditionally render Itemdetail based on the selected recipe */}
        {selectedRecipe && (
          <Routes>
            <Route
              path={`/itemdetails/${encodeURIComponent(selectedRecipe.recipe.label)}`}
              element={<Itemdetail rec={selectedRecipe} />}
            />
          </Routes>
        )}
      </div>
    </Router>
  );
}
