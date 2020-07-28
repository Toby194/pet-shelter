import React from 'react';
import PetForm from '../components/PetForm';

export default function NewPet() {
  const newPet = {
    name: '',
    Type: '',
    description: ''
  };

  return (
    <div>
      <h1> Pet Shelter </h1>

      <h3>Know a pet needing a home</h3>

      <PetForm
        pet={newPet}
        method="post"
        url="http://localhost:8000/api/pets"
      />
    </div>
  );
}
