import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default function DetailsPets({ id }) {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/pets/' + id)
      .then(res => setPets(res.data));
  }, [id]);

  function handleDelete(id) {
    axios
      .delete('http://localhost:8000/api/pets/' + id)
      .then(res => setPets(res.data));
      navigate('/');
  }

  return (
    <div>
      <Link to="/">back to home</Link>
      <h1>Pet Shelter</h1>
      <p>Details about:{pets.name}</p>
      <button onClick={() => handleDelete(pets._id)}>Adopt {pets.name}</button>
      <div>
        <h4>Pet Type:</h4>
        {pets.Type}
        <h4>Description:</h4>
        {pets.description}
      </div>
      <div>
        <h5>Like {pets.name}</h5>
      </div>
    </div>
  );
}
