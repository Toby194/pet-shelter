import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetForm from '../components/PetForm';

export default function EditPet({ id }) {
  const [pet, setPet] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/pets/' + id)
      .then(res => {
        setPet(res.data);
        setIsLoading(false);
      })
      .catch(console.log);
  }, [id]);

  if(isLoading) return ('Loading...')

  return (
    <div>
      <h1>Pet Shelter</h1>

      <PetForm
        pet={pet}
        method="put"
        url={'http://localhost:8000/api/pets/' + id}
      />
    </div>
  );
}
