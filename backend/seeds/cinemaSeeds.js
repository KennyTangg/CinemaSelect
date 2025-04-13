const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Cinema = require("../models/cinema");

dotenv.config();

const cinemas = [
    {
        placeName: "Agora Mall XXI",
        location: "Agora Mall Lt. 3 Jl. M H Thamrin No. 10, Kebon Melati, Kec. Tanah Abang, Jakarta Pusat 10230",
        price2D: "Rp45.000",
        timeRegular2D: ["11:20", "13:40", "16:20", "18:50", "21:20", "23:40"],
        priceImax: "Rp85.000",
        timeImax: ["12:30", "15:00", "17:30"]
    },
    {
        placeName: "Grand Indonesia CGV",
        location: "Grand Indonesia Mall East Mall Lt. 8, Jl. M.H. Thamrin No.1, Jakarta Pusat 10310",
        price2D: "Rp55.000",
        timeRegular2D: ["10:30", "12:45", "15:00", "17:15", "19:30", "21:45", "23:00", "23:59"],
        priceVelvet: "Rp150.000",
        timeVelvet: ["11:15", "13:45", "16:15", "18:45", "21:15"],
        priceGoldClass: "Rp200.000",
        timeGoldClass: ["12:00", "14:30", "17:00", "19:30", "22:00", "23:30"],
        priceSatin: "Rp100.000",
        timeSatin: ["11:45", "14:15", "16:45", "19:15", "21:45", "23:15"]
    },
    {
        placeName: "Plaza Indonesia XXI",
        location: "Plaza Indonesia Lt. 6, Jl. M.H. Thamrin No. 28-30, Jakarta Pusat 10350",
        price2D: "Rp60.000",
        timeRegular2D: ["11:00", "13:30", "16:00", "18:30", "21:00", "23:30"],
        priceImax: "Rp100.000",
        timeImax: ["12:15", "14:45", "17:15", "19:45"] 
    },
    {
        placeName: "Kota Kasablanka CGV",
        location: "Kota Kasablanka Mall Lt. 3, Jl. Casablanca Raya Kav. 88, Jakarta Selatan 12870",
        price2D: "Rp50.000",
        timeRegular2D: ["10:45", "12:45", "14:45", "16:45", "18:45", "20:45", "22:45", "23:45", "23:59"], 
        priceVelvet: "Rp140.000",
        timeVelvet: ["11:30", "13:30", "15:30", "17:30", "19:30", "21:30", "23:30"], 
        priceSatin: "Rp95.000",
        timeSatin: ["12:45", "14:45", "16:45", "18:45", "20:45"] 
    },
    {
        placeName: "Pondok Indah Mall XXI",
        location: "Pondok Indah Mall 2 Lt. 3, Jl. Metro Pondok Indah, Jakarta Selatan 12310",
        price2D: "Rp55.000",
        timeRegular2D: ["11:10", "13:40", "16:10", "18:40", "21:10", "23:40"], 
        priceImax: "Rp95.000",
        timeImax: ["12:00", "14:30", "17:00", "19:30"] 
    },
    {
        placeName: "Central Park CGV",
        location: "Central Park Mall Lt. 8, Jl. Letjen S. Parman Kav. 28, Jakarta Barat 11470",
        price2D: "Rp55.000",
        timeRegular2D: ["10:15", "12:15", "14:15", "16:15", "18:15", "20:15", "22:15", "23:15", "23:45", "23:59"],
        priceVelvet: "Rp145.000",
        timeVelvet: ["11:00", "13:30", "16:00", "18:30", "21:00", "23:30"], 
        priceGoldClass: "Rp195.000",
        timeGoldClass: ["11:45", "14:15", "16:45", "19:15", "21:45", "23:15"] 
    },
    {
        placeName: "Mall Kelapa Gading XXI",
        location: "Mall Kelapa Gading 3 Lt. 3, Jl. Boulevard Kelapa Gading, Jakarta Utara 14240",
        price2D: "Rp50.000",
        timeRegular2D: ["10:30", "13:00", "15:30", "18:00", "20:30", "23:00"], 
        priceImax: "Rp90.000",
        timeImax: ["11:15", "13:45", "16:15"] 
    },
    {
        placeName: "Senayan City XXI",
        location: "Senayan City Lt. 5, Jl. Asia Afrika Lot 19, Jakarta Pusat 10270",
        price2D: "Rp60.000",
        timeRegular2D: ["11:30", "13:30", "15:30", "17:30", "19:30", "21:30", "23:30"],
        priceImax: "Rp100.000",
        timeImax: ["10:45", "12:45", "14:45", "16:45", "18:45", "20:45", "22:45", "23:45", "23:59"]
    },
    {
        placeName: "Gandaria City CGV",
        location: "Gandaria City Mall Lt. 3, Jl. Sultan Iskandar Muda, Jakarta Selatan 12240",
        price2D: "Rp55.000",
        timeRegular2D: ["10:00", "12:30", "15:00", "17:30", "20:00", "22:30", "23:45"],
        priceVelvet: "Rp145.000",
        timeVelvet: ["11:30", "14:00", "16:30", "19:00", "21:30"],
        priceSatin: "Rp95.000",
        timeSatin: ["12:15", "14:45", "17:15", "19:45", "22:15", "23:30"]
    }
];

const seedCinemas = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");

        await Cinema.deleteMany({});
        await Cinema.insertMany(cinemas);
    } catch (error) {
        console.log("Error seeding data: ", error);
    }
};

seedCinemas();
