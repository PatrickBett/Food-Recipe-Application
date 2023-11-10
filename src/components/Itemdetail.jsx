import React, { useState, useEffect } from 'react';

export default function Itemdetail({ rec }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments when the component mounts
   
  }, []);

 

  return (
    <div className='ingredients-section'>
      <h2>Ingredients</h2>
      {rec.recipe.ingredientLines.map((ingredient, index) => (
        <ul key={index}>
          <li>{ingredient}</li>
        </ul>
      ))}
      <form className='comment-form'>
        <input type='text' value={name}  placeholder='Enter Your Name...' />
        <br />
        <textarea
          placeholder='Type your comment about the ingredients here...'
          value={comment}
          
        ></textarea>
        <br />
        <button className='commentBtn' >
          Submit
        </button>
      </form>

      <h2>Comments:</h2>
      {/* {comments.map((comment, index) => (
        <p key={index} className='added-comment'>
          <strong>{comment.name}: </strong> {comment.comment}
        </p>
      )} */}
    </div>
  );
}