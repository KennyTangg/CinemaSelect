const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    movieTitle: {
        type: String,
        required: true
    },
    moviePoster: {
        type: String,
        required: true
    },
    cinemaName: {
        type: String,
        required: true
    },
    showDate: {
        type: Date,
        required: true
    },
    showTime: {
        type: String,
        required: true
    },
    seats: [{
        type: String,
        required: true
    }],
    screenType: {
        type: String,
        required: true
    },
    ticketId: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'used', 'cancelled'],
        default: 'active'
    }
});

module.exports = mongoose.model("Ticket", ticketSchema);
