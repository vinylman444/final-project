"use client";


import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/user') 
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h2 className="left-align">User List</h2>
      <h1 />
      <table className="user-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Passcode</th>
            <th>Email</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.Username}</td>
              <td>{user.Password}</td>
              <td>{user.Email}</td>
              <td>{user.Admin}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
