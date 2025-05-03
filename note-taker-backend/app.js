const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use('/api/auth',authRoute);
app.use('/api/notes',notesRoute);

module.exports = app;