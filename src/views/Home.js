import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Home() {
  console.log('Home');
  return (
    <div>
      <h1>Home</h1>
      
      <Outlet />
    </div>
  );
}

export default Home;
