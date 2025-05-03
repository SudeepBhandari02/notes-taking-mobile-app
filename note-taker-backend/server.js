const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');

const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);    // login, refresh
app.use('/api/notes', noteRoutes);   // get, post, delete

// Start the server
app.listen(PORT, () => {
  console.log(Server running on http://localhost:${PORT}`);
});
