// src/components/ProfileDetails.jsx
import React from 'react';

const ProfileDetails = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software developer with a passion for creating amazing applications.',
  };

  return (
    <div>
      <h3>Profile Details</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
    </div>
  );
};

export default ProfileDetails;
