const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
const testRoute = require('./routes/test');
app.use('/api', testRoute);

// Export the app
module.exports = app;
