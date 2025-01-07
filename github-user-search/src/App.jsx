// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';

const App = () => {
  return (
    <Router>
      <div>
        <h1>GitHub User Search</h1>
        <Routes>
          <Route path="/" element={<Search />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
