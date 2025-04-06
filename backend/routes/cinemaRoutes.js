const express = require("express");
const cinemaRouter = express.Router();
const Cinema = require("../models/cinema");

cinemaRouter.get("/", async (req,res) => {
    try {
        const cinemas = await Cinema.find();
        if(!cinemas) {
            return res.status(404).json({message: "Cinema Not Found"});
        }
        res.json(cinemas);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

module.exports = cinemaRouter;