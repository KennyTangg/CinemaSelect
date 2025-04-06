const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const movieRouter = require('./routes/movieRoutes');
const cinemaRouter = require('./routes/cinemaRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.use('/api/movies', movieRouter);
app.use('/api/cinemas', cinemaRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});