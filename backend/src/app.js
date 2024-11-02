const express = require('express');
const app = express();

app.use(express.json());

// Import and use routes
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const categoryRoutes = require('./routes/category');
const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);

module.exports = app;
