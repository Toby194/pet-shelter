import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function PetForm({pet, method, url}) {
    const [name, setName] = useState(pet.name);
    const [Type, setType] = useState(pet.Type);
    const [description, setDescription] = useState(pet.description);
    
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);

        axios[method](url, {
            name,
            Type,
            description,
        })
            .then(() => navigate('/pets'))
            .catch((err) => {
                const errs = [];
                const innerErrorsObject = err.res.data.errors;

                for(const key in innerErrorsObject) {
                    errs.push(innerErrorsObject[key].message);
                }
                setErrors(errs);
            });
    }

    return (
        <div>
            {errors.map((err, i) => (
                <p key={i} style={{color: 'red'}}>
                    {err}
                </p>
            ))}
            <form onSubmit= {handleSubmit}>
                <div>
                    <label>Name</label>
                    <input 
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Type</label>
                        <input 
                            name="Type"
                            value={Type}
                            onChange={e => setType(e.target.value)}
                        />
                </div>
                <div>
                    <label>Description</label>
                        <input 
                            name="description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                </div>
                <button>Add Pet</button>
            </form>
            
        </div>
    );
}
