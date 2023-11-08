"use client";

import { use, useState } from "react"

export default function Form() {
    const [location, setLocation] = useState('');
    const [error, setError] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Location: ", location);

        const res = await fetch('api/location', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Name: location})
        });

        const {msg} = await res.json();
        setError(msg);
        console.log(error);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Location">Location Name: </label>
                    <input 
                    onChange={(e) => setLocation(e.target.value)}
                    value = {location}
                    type="text" id="location"
                    />
                    <button type="submit">Send</button>
                </div>
            </form>
        </>
    )
}