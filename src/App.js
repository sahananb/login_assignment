import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import './styles/main.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const switchToRegister = () => setIsRegistering(true);
  const switchToLogin = () => setIsRegistering(false);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="app">
      {user ? (
        <Dashboard user={user} />
      ) : isRegistering ? (
        <Register switchToLogin={switchToLogin} />
      ) : (
        <Login onLogin={() => {}} switchToRegister={switchToRegister} />
      )}
    </div>
  );
}

export default App;

