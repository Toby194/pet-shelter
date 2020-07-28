const { Pet } = require('../models/pet.model');

module.exports.index = (req, res) => {
  res.json({
    message: 'Welcome to pet shelter'
  });
};

module.exports.createPet = (req, res) => {
  Pet.create(req.body)
    .then(pet => res.json(pet))
    .catch(err => res.status(400).json(err));
};

module.exports.allPets = (req, res) => {
  Pet.find()
    .then(allPets => res.json(allPets))
    .catch(err => res.json(err));
};

module.exports.onePet = (req, res) => {
  Pet.findById({ _id: req.params.id })
    .then(onePet => res.json(onePet))
    .catch(err => res.json(err));
};

module.exports.updatePet = (req, res) => {
  Pet.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true
  })
    .then(() => res.json({ status: 'success' }))
    .catch(err => res.status(400).json(err));
};

module.exports.deletePet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then(deletedPet => res.json({ status: 'deleted' }))
    .catch(err => res.json(err));
};
