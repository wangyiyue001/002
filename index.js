// This is the main entry point for the project

// Import necessary modules and libraries
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of the Express application
const app = express();

// Use middleware to parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Define routes and their handlers
app.get('/', (req, res) => {
  res.send('Welcome! The goal of this project is to provide users with a simple, intuitive interface that enables them to easily complete tasks and improve work efficiency.');
});

// Start the server and listen for incoming requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
