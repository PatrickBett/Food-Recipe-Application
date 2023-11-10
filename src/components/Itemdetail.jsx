import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Itemdetail({ rec }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments for the current recipe when the component mounts
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/comments?recipeLabel=${rec.recipe.label}`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [rec.recipe.label]);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/comments', {
        name,
        comment,
        recipeLabel: rec.recipe.label,
      });
      alert('Comment submitted successfully');

      // Update the comments state with the new comment
      setComments([...comments, response.data]);

      // Clear the input fields
      setName('');
      setComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:3001/comments/${commentId}`);
      // Update the comments state by removing the deleted comment
      setComments(comments.filter(commentData => commentData.id !== commentId));
    } catch (error) {
      console.error('Error deleting comment:', error);
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
      <ul>
        {comments.map((commentData) => (
          <li key={commentData.id} className='list-comment'>
            <strong>{commentData.name}:</strong> {commentData.comment}
            <button className='updateBtn'>Update</button>
            <button className='DeleteBtn' onClick={() => handleDeleteComment(commentData.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
