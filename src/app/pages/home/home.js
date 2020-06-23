import React from 'react';
import './home.scss';
//components
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to mesenger!</h1>
      <div className="redirect-div">
        <h3>Have an account? &#x2192;</h3>
        <Link to={`/login`}>Login</Link>
      </div>
      <div className="redirect-div">
        <h3>It's your first time here? &#x2192;</h3>
        <Link to={`/register`}>Register</Link>
      </div>
    </div>
  );
}

export default Home;
