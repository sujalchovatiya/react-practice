import React from 'react';

function Dashboard({ onLogout }) {
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    onLogout();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;