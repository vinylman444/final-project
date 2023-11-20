"use client";

// LocationList.js

import React, { useEffect, useState } from 'react';

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Fetch locations from your API endpoint
    fetch('/api/game') // Adjust the endpoint URL
      .then((response) => response.json())
      .then((data) => {
        setGames(data.games);
      })
      .catch((error) => {
        console.error('Error fetching locations:', error);
      });
  }, []);

  return (
    <div>
      <h2>Game List</h2>
      <table className="game-table">
        <thead>
          <tr>
            <th>Game Name</th>
            <th>Game Condition</th>
            <th>Game Cost</th>
            <th>Game Description</th>
            <th>Game Image</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game._id}>
              <td>{game.Name}</td>
              <td>{game.Condition}</td>
              <td>{game.Cost}</td>
              <td>{game.Description}</td>
              <td>
                <img src={game.Image} alt={game.Name} style={{ maxWidth: '100px' }} />
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GameList;
