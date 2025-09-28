const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Connect to MongoDB
  mongoose.connect('mongodb://localhost:27017/mydb')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simple registration route
app.post('/register', (req, res) => {
  // Handle registration logic
  res.send('User registered!');
});

// Simple login route
app.post('/login', (req, res) => {
  // Handle login logic
  res.send('User logged in!');
});

// Start server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
