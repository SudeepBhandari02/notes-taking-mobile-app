const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/authRoute')
const notesRoute = require('./routes/notesRoute')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth',authRoute);
app.use('/api/notes',notesRoute);

module.exports = app;