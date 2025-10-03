const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const leadRoutes = require('./routes/leads');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

// Routes
app.use('/api/leads', leadRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ message: 'Lead Management API is running!' });
});

// Root endpoint info
app.get('/', (req, res) => {
  res.json({ 
    message: 'Lead Management API Server',
    frontend: 'http://localhost:3000',
    api: 'http://localhost:5000/api',
    endpoints: {
      health: '/api/health',
      leads: '/api/leads'
    }
  });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });