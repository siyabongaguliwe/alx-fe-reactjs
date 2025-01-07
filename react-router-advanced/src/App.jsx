// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

const isAuthenticated = true; // Replace with actual authentication logic

const App = () => {
  return (
    <Router>
      <div>
        <h1>Advanced Routing in React</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<ProtectedRoute element={Profile} isAuthenticated={isAuthenticated} />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
