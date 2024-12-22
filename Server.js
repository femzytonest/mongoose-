// server.js

// Import required modules
const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Confirm connection success or log errors
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import the Person model
const Person = require('./models/person');

// Example actions: (Comment out when not in use to avoid duplicate operations)
// Uncomment to execute once when you set up the database
/*
Person.create({ name: 'John Doe', age: 30, favoriteFoods: ['Pizza', 'Burger'] }, (err, data) => {
  if (err) console.error(err);
  else console.log('Person Created:', data);
});
*/

// Server setup
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
