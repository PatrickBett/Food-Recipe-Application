import React, { useState } from 'react';
import axios from 'axios';

export default function Itemdetail({ rec }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/comments', {
        name,
        comment,
        recipeLabel: rec.recipe.label,
      }) ;
     alert('Comment submitted successfully')

      console.log(response.data); // log the response from the server
      // You can update the UI or take any other necessary actions here
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <div className='ingredients-section'>
      <h2>Ingredients</h2>
      {rec.recipe.ingredientLines.map((ingredient, index) => (
        <ul key={index}>
          <li>{ingredient}</li>
        </ul>
      ))}
      <form className='comment-form' onSubmit={handleCommentSubmit}>
  <input
    type='text'
    id='nameInput'
    name='name'
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder='Enter Your Name...'
  />
  <br />
  <textarea
    id='commentInput'
    name='comment'
    value={comment}
    onChange={(e) => setComment(e.target.value)}
    placeholder='Type your comment about the ingredients here...'
  ></textarea>
  <br />
  <button type='submit' className='commentBtn'>
    Submit
  </button>
</form>

      <h2>Comments:</h2>
      {/* Display existing comments if needed */}
    </div>
  );
}
