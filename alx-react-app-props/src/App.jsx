import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import WelcomeMessage from './components/WelcomeMessage';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';
import './App.css';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <Header />
      <MainContent />
      <Counter />
      <WelcomeMessage />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <ProfilePage />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
