import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Router, Redirect } from '@reach/router';
import AllPets from './views/AllPets';
import DetailsPet from './views/DetailsPet';
import EditPet from './views/EditPet';
import NewPet from './views/NewPet';

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getAllPetsAPI();
  }, []);

  const getAllPetsAPI = () => {
    axios
      .get('http//localhost:8000/api/pets')
      .then(res => {
        console.log(res.data);
        setPets(res.data);
      })
      .catch(err => {
        console.log(err.res);
      });
  };
  const deletePet = id => {
    setPets(pets.filter(pet => pet._id !== id));
  };
  return (
    <div className="App">
      <Router>
        <AllPets path="/pets" />
        <DetailsPet path="pets/:id" pets={pets} deletePet={deletePet} />
        <EditPet path="pets/:id/edit" />
        <NewPet path="pets/new" />
        <Redirect from="/" to="pets" noThrow />
      </Router>
    </div>
  );
}

export default App;
