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
      cost: parseFloat(costRef.current.value) || 0,
      Description: descriptionRef.current.value,
      Image: imageRef.current.value,
    };

    try {
      // Here you should make an API call to save the gameData, for example:
      // const response = await fetch('/api/games', { method: 'POST', body: JSON.stringify(gameData), headers: { 'Content-Type': 'application/json' } });
      // if (!response.ok) throw new Error('Network response was not ok.');
      console.log('Game data submitted:', gameData);
    } catch (error) {
      console.error('Error saving game:', error);
    }
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} name="Name" type="text" placeholder="Game Name" />
        <input ref={conditionRef} name="Condition" type="text" placeholder="Game Condition" />
        <input ref={costRef} name="cost" type="number" placeholder="Game Cost" />
        <textarea ref={descriptionRef} name="Description" placeholder="Game Description" />
        <input ref={imageRef} name="Image" type="text" placeholder="Game Image URL" />
        <button type="submit">Save Game</button>
      </form>
    </div>
  );
}
