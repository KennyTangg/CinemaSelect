const express = require('express');
const movieRouter = express.Router();
const Movie = require('../models/movie');

movieRouter.get("/", async (req,res) => {
    try{
        const movie = await Movie.find();
        if(movie){
            return res.status(404).json({message: "Movie not Found"});
        }
        res.json(movie);
    } catch(error){
        return res.status(500).json({ message: error.message });
    }
});

movieRouter.get("/:path",async (req,res) => {
    try{
        const movie = await Movie.findOne({ path: req.params.path });
        if (!movie){
            return res.status(404).json({ message: "Movie not found"});
        }
        res.json(movie);
    } catch (error){
        res.status(500).json({ message: error.message});
    }
})

module.exports = movieRouter;