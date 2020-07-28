const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name'],
      minlength: [3, 'Name must be at least 3 characters.']
    },
    Type: {
      type: String,
      required: [true, 'Please enter what type of pet.'],
      minlength: [3, 'Type of pet must have at least 3 characters.']
    },
    description: {
      type: String,
      required: [true, 'Please enter the description of the pet.'],
      minlength: [3, 'Description of the pet must be at least 3 characters.']
    },
    skills: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports.Pet = mongoose.model('Pet', PetSchema);
