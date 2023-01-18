import React, { useState } from 'react';
import Ride from './Ride';
import Activity from './Activity';
import Profile from './Profile';

function App() {
  const [currentPage, setCurrentPage] = useState("Ride");

  return (
    <div className="App">
      <h1 className="title">EstriCab</h1>
      <div className="buttons-container">
        <button 
          className="button" 
          onClick={() => setCurrentPage("Ride")}>
            Ride
        </button>
        <button 
          className="button" 
          onClick={() => setCurrentPage("Activity")}>
            Activity
        </button>
        <button 
          className="button" 
          onClick={() => setCurrentPage("Profile")}>
            Profile
        </button>
      </div>
      {currentPage === "Ride" && <Ride />}
      {currentPage === "Activity" && <Activity />}
      {currentPage === "Profile" && <Profile />}
    </div>
  );
}

export default App;