import React from 'react';
import { auth } from '../firebase/config';

const Dashboard = ({ user }) => {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="container welcome-card">
      <h2>Welcome, {user.displayName || user.email.split('@')[0]}!</h2>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;

