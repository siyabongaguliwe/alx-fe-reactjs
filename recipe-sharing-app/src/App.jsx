import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing Application</h1>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;

