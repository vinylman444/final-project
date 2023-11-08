'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import React from 'react';
import MyMap from '../components/MyMap';

const Home = () => {
  return (
    <div>
      <h1>Map</h1>
      <MyMap />
    </div>
  );
};

export default Home;
