"use client";

import React, { useRef } from 'react';

export default function AddGame() {
  // Create a ref for each input
  const nameRef = useRef(null);
  const conditionRef = useRef(null);
  const costRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const gameData = {
      Name: nameRef.current.value,
      Condition: conditionRef.current.value,
      Cost: parseFloat(costRef.current.value) || 0,
      Description: descriptionRef.current.value,
      Image: imageRef.current.value,
    };
    //console.log('Game data before saving:', gameData);
    try {
      e.preventDefault();
     const res = await fetch('api/game', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(gameData)
      });

      const { msg, success } = await res.json();
      setError(msg);
      console.log(error);

        window.location.href = "/gamelist";
  

    } catch (error) {
      console.error('Error saving game:', error);
    }
  };

  return (
    <div className="add-game-container">
      <h2>Add a New Game</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Name">Game Name:</label>
          <input ref={nameRef} id="Name" name="Name" type="text" placeholder="Enter the game's name" />
        </div>
        <div className="form-group">
          <label htmlFor="Condition">Game Condition:</label>
          <select ref={conditionRef} id="Condition" name="Condition">
            <option value="" disabled>Select a condition</option>
            <option value="Broken">Broken</option>
            <option value="Poor">Poor</option>
            <option value="Mediocre">Mediocre</option>
            <option value="Good">Good</option>
            <option value="Excellent">Excellent</option>
            <option value="Perfect">Perfect</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Cost">Game Cost:</label>
          <input ref={costRef} id="Cost" name="Cost" type="number" placeholder="Enter the game's cost" />
        </div>
        <div className="form-group">
          <label htmlFor="Description">Game Description:</label>
          <textarea ref={descriptionRef} id="Description" name="Description" placeholder="Enter the game's description" />
        </div>
        <div className="form-group">
          <label htmlFor="Image">Game Image URL:</label>
          <input ref={imageRef} id="Image" name="Image" type="text" placeholder="Enter the game's image URL" />
        </div>
        <div className="form-group">
          <button type="submit" className="large-button">Save Game</button>
        </div>
      </form>
    </div>
  );
}
