import React, { useState } from 'react';
import './App.css';
import AddComponent from './Components/AddComponent';
import HomeComponent from './Components/HomeComponent';
import ListComponent from './Components/ListComponent';

function App() {
  const [trip, setTrip] = useState([]);

  function addTrip(newTrip) {
    setTrip(prevTrip => {
      return [...prevTrip, newTrip];
    });
    console.log(trip);
  }

  return (
    <div className="App">
      <HomeComponent trips={trip}/>
      <AddComponent onAdd={addTrip}/>
      <ListComponent triplist={trip}/>
    </div>
  );
}

export default App;
