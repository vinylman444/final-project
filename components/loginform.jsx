"use client";

import React, { useState } from 'react';
import Link from 'next/link'; 

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log('Start authentication');
  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = {
        username: username,
        password: password,
      };

      console.log("user name is ",loginData.username);

      const res = await fetch('api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });
      
      if (res.status === 200) {
        const { msg, success, user } = await res.json();
        
        if (success) {
          // Redirect to "/locationlist" after a successful login
          console.log("Logged in user: ",user.Username);
          localStorage.setItem('sessionId', user.Username);
          window.location.href = "/gamelist";
        } else {
          // Handle the case when the server responds with a success value of false
          console.error('Login failed:', msg);
          // You can display an error message to the user here
        }
      } else {
        // Handle HTTP errors (e.g., 401 for unauthorized access)
        console.error('HTTP Error:', res.status);
        // You can display an error message to the user here
      }
      
  };

  return (
    <div className="login-container">
            <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
      <Link href="/">Go to Home</Link>
    </div>
  );
}
