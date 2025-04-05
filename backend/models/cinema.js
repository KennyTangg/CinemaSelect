const mongoose = require('mongoose');

const cinemaSchema = mongoose.Schema({
    placeName: String,
    location: String,
    price: String,
    movieTime: [{
        type:String
    }]
})

module.exports = mongoose.model("Cinema", cinemaSchema);