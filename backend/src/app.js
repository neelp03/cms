const express = require('express');
const app = express();

app.use(express.json());

// Import and use routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);


module.exports = app;
