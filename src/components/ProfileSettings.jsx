// src/components/ProfileSettings.jsx
import React, { useState } from 'react';

const ProfileSettings = () => {
  const [email, setEmail] = useState('john.doe@example.com');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Updated email:', email);
    console.log('Updated password:', password);
  };

  return (
    <div>
      <h3>Profile Settings</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Update Settings</button>
      </form>
    </div>
  );
};

export default ProfileSettings;