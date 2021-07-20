import React, { useState } from 'react';
import './App.css';
import AddComponent from './Components/AddComponent';
import HomeComponent from './Components/HomeComponent';
import ListComponent from './Components/ListComponent';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  const [trip, setTrip] = useState([]);

  function addTrip(newTrip) {
    setTrip(prevTrip => {
      return [...prevTrip, newTrip];
    });
    console.log(trip);
  }

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><HomeComponent trips={trip}/></Route>
          <Route path="/Home"><HomeComponent trips={trip}/></Route>
          <Route path="/Add"><AddComponent onAdd={addTrip}/></Route>
          <Route path="/List"><ListComponent triplist={trip}/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
