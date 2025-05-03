const express = require('express');
const bodyParser = require('body-parser');
const authRoute = require('./routes/authRoute')
const notesRoute = require('./routes/notesRoute')

const app = express();

app.use(bodyParser.json())
app.use('/api/auth',authRoute);
app.use('/api/notes',notesRoute);

module.exports = app;