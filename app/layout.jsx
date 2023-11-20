"use client";

import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedSessionId = localStorage.getItem('sessionId');
      setSessionId(storedSessionId);
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href="/">
            <button className="large-button2">Home</button>
          </Link>
          <Link href="/addlocation">
            <button className="large-button2">Add a Location</button>
          </Link>
          <Link href="/addgame">
            <button className="large-button2">Add a Game</button>
          </Link>
          <Link href="/locationlist">
            <button className="large-button2">Show All Locations</button>
          </Link>
          <Link href="/gamelist">
            <button className="large-button2">Show All Games</button>
          </Link>
          <Link href="/adduser">
            <button className="large-button2">User Registration</button>
          </Link>
          {sessionId ? (
            <Link href="/logout">
            <button className="large-button2">Logout</button>
          </Link>
          ) : (
            <Link href="/login">
              <button className="large-button2">Login</button>
            </Link>
          )}
          <Link href="/userlist">
            <button className="large-button2">Site Admin</button>
          </Link>
        </nav>

        <h1 className="site-title">Rhythm Game Map</h1>
        {sessionId && (
          <div className="welcome-message">Welcome {sessionId}</div>
        )}
        <h1/>
        <h1/>
        {children}
      </body>
    </html>
  );
}

