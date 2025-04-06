const mongoose = require('mongoose');

const cinemaSchema = mongoose.Schema({
    placeName: String,
    location: String,
    price2D: String,
    timeRegular2D: [{
        type:String,
        required: true
    }],
    // CGV cinema ( optional )
    priceVelvet: String,
    timeVelvet: [{
        type: String
    }],
    priceGoldClass: String,
    timeGoldClass: [{
        type: String
    }],
    priceSatin: String,
    timeSatin: [{
        type: String
    }],
    // XXI cinema ( optional )
    priceImax: String,
    timeImax:[{
        type:String
    }]
})

module.exports = mongoose.model("Cinema", cinemaSchema);