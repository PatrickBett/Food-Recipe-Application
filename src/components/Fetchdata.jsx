import React, { useEffect, useState } from 'react';
import Displayrecipe from './Displayrecipe';

export default function Fetchdata({ input }) {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const API_ID = "9643d3f6";
        const API_KEY = "b4e21e9906c8c1228a5ed97357a65f5e";
        const url = `https://api.edamam.com/search?q=${input}&app_id=${API_ID}&app_key=${API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setRecipe(data.hits);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.error(error);
      setLoading(false); // Set loading to false in case of an error
    }
  }, [input]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Displayrecipe recipe={recipe.slice(0, 9)} /> // Limit the number of displayed recipes to 10
      )}
    </div>
  );
}