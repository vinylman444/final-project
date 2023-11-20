"use client";

import React, { useRef } from 'react';

export default function AddUser() {
  // Create a ref for each input
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const adminRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      Username: usernameRef.current.value,
      Password: passwordRef.current.value,
      Email: emailRef.current.value,
      Admin: adminRef.current.value
    };

    try {
      e.preventDefault();
     const res = await fetch('api/user', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
      });

      const { msg, success } = await res.json();
      setError(msg);
      console.log(error);

        window.location.href = "/userlist";


      console.log('User data submitted:', userData);
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  return (
    <div className="add-user-container">
  <h2>User Registration</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="Username">User Name:</label>
      <input ref={usernameRef} id="Username" name="Username" type="text" placeholder="Enter user id" />
    </div>
    <div className="form-group">
      <label htmlFor="Password">Password:</label>
      <input ref={passwordRef} id="Password" name="Password" type="password" placeholder="Enter password" />
    </div>
    <div className="form-group">
      <label htmlFor="Email">Email:</label>
      <input ref={emailRef} id="Email" name="Email" type="text" placeholder="Enter user email" />
    </div>
    <div className="form-group">
      <label htmlFor="Admin">Admin Status</label>
      <input ref={adminRef} id="Admin" name="Admin" type="text" placeholder="N" />
    </div>
    <div className="form-group">
      <button type="submit" className="large-button">Register</button>
    </div>
  </form>
</div>

  );
}