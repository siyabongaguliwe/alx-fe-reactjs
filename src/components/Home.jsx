// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Application</h1>
      <p>This is the home page. Here you can find links to various sections of our app.</p>
      <nav>
        <ul>
          <li><Link to="/profile">Go to Profile</Link></li>
          <li><Link to="/blog/1">Read Blog Post 1</Link></li>
          <li><Link to="/blog/2">Read Blog Post 2</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
