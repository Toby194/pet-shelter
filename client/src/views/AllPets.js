import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

export default function AllPets() {
  const [pets, setPets] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/pets')
      .then(res => setPets(res.data))
      .catch(() => setHasError(true));
  }, []);
  if (hasError) return 'Something is wrong with the connection.';

  return (
    <div>
      <Link to="/pets/new">add a pet to the shelter</Link>
      <h1>Pet Shelter</h1>
      <h3> These pets are looking for a good home </h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.map(pet => (
            <tr key={pet._id}>
              <td>{pet.name}</td>
              <td>{pet.Type}</td>
              <td>
                <Link to={'/pets/' + pet._id}>details</Link> | {''}
                <Link to={'/pets/' + pet._id + '/edit'}>edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
