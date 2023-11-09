"use client";

// LocationList.js

import React, { useEffect, useState } from 'react';

function LocationList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch locations from your API endpoint
    fetch('/api/location') // Adjust the endpoint URL
      .then((response) => response.json())
      .then((data) => {
        setLocations(data.locations);
      })
      .catch((error) => {
        console.error('Error fetching locations:', error);
      });
  }, []);

  return (
    <div>
       <table className="location-table">
        <thead>
          <tr>
            <th>Name</th>
           
            <th>Image</th>
            <th>XCoord</th>
            <th>YCoord</th>
            <th>Games</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => (
            <tr key={location._id}>
              <td>{location.Name}</td>
              
              <td>{location.Image}</td>
              <td>{location.XCoord}</td>
              <td>{location.YCoord}</td>
              <td>{location.Description}</td>
              <td>
                <ul>
                  {location.Games.map((game) => (
                    <li key={game._id}>{game.name}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LocationList;
