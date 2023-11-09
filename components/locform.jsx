"use client";

import { use, useState } from "react"
import LocationList from "./LocationList";
//import { useRouter } from 'next/router';

export default function Form() {
    const [location, setLocation] = useState({
        Name: "",
        Description: "",
        Image: "",
        XCoord: 0, // Assuming the default value for coordinates is 0
        YCoord: 0,
      });
      //const router = useRouter();
      const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Location: ", location);

        const res = await fetch('api/location', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(location)
        });

        const { msg, success } = await res.json();
        setError(msg);
        console.log(error);
        if (success) {
          // Redirect to "/locationlist" after a successful save
          window.location.href = "/locationlist";
          //router.push('/locationlist');
        }
    };

    return (
        <>
               <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Location Name: </label>
          <input
            onChange={(e) =>
              setLocation({ ...location, Name: e.target.value })
            }
            value={location.Name}
            type="text"
            id="Name"
          />
        </div>
        <div>
          <label htmlFor="Description">Description: </label>
          <input
            onChange={(e) =>
              setLocation({ ...location, Description: e.target.value })
            }
            value={location.Description}
            type="text"
            id="Description"
          />
        </div>
        <div>
          <label htmlFor="Image">Image URL: </label>
          <input
            onChange={(e) =>
              setLocation({ ...location, Image: e.target.value })
            }
            value={location.Image}
            type="text"
            id="Image"
          />
        </div>
        <div>
          <label htmlFor="XCoord">X Coordinate: </label>
          <input
            onChange={(e) =>
              setLocation({
                ...location,
                XCoord: parseFloat(e.target.value), // Convert to a number
              })
            }
            value={location.XCoord}
            type="number"
            id="XCoord"
          />
        </div>
        <div>
          <label htmlFor="YCoord">Y Coordinate: </label>
          <input
            onChange={(e) =>
              setLocation({
                ...location,
                YCoord: parseFloat(e.target.value), // Convert to a number
              })
            }
            value={location.YCoord}
            type="number"
            id="YCoord"
          />
        </div>
        <button type="submit" className="large-button">Send</button>

      </form>
      {error && <p>Error: {error}</p>}
      <LocationList />
    </>

    


    )
}