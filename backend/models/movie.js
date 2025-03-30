const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  posterPath: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  genre: [{
    type: String
  }],
  synopsis: String,
  director: String,
  duration: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Movie', movieSchema);