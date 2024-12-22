// models/person.js

const mongoose = require('mongoose');

// Define the Person schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name is required
  age: Number, // Optional age
  favoriteFoods: [String], // Array of favorite foods
});

// Create the model from the schema
const Person = mongoose.model('Person', personSchema);

// Export the model
module.exports = Person;
