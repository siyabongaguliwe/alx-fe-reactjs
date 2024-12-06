import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UserProfile from './components/UserProfile'; // Import the UserProfile component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center space-x-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo w-16 h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react w-16 h-16" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-center mt-8">Vite + React</h1>
      <div className="card p-4 bg-gray-800 rounded-lg shadow-lg text-center mt-4">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-center mt-4">
        Click on the Vite and React logos to learn more
      </p>
      <UserProfile /> {/* Include the UserProfile component */}
    </>
  );
}

export default App;
