const express = require('express');
const ticketRouter = express.Router();
const Ticket = require('../models/ticket');
const protect = require('../middleware/validateToken');

ticketRouter.get("/",  async (req,res) => {
    try{
        const tickets = await Ticket.find({ userId: req.user.id });
        if(!tickets.length){
            return res.status(404).json({ message: "Tickets not found" })
        }
        res.json(tickets);
    } catch(error){
        return res.status(500).json({ message: error.message });
    }
});

ticketRouter.get("/:ticketId", async (req,res) => {
    try{
        const ticket = await Ticket.findOne({
            ticketId: req.params.ticketId,
            userId: req.user.id
        });
        
        if(!ticket){
            return res.status(404).json({ message: "Ticket not found"});
        } 
        res.json(ticket);
    } catch(error){
        return res.status(500).json({ message: error.message });
    }
})

ticketRouter.delete("/:ticketId", async (req,res) => {
    try{
        const ticket = await Ticket.findOneAndUpdate(
            {
                ticketId: req.params.ticketId,
                userId: req.user.id,
                status: "active"
            },
            { status: 'cancelled' },
            { new: true }
        );

        if(!ticket){
            return res.status(404).json({ message: "Ticket not found or already cancelled/used"});
        }
        res.json({ message: "Ticket cancelled successfully"});
    } catch(error){
        return res.status(500).json({ message: error.message });
    }
})

ticketRouter.patch("/:ticketId/status", async (req,res) => {
    try{
        const { status } = req.body;
        if (!["active", "used", "cancelled"].includes(status)){
            return res.status(400).json({ message: "Invalid status"})
        }

        const ticket = await Ticket.findOneAndUpdate(
            { 
                ticketId: req.params.ticketId,
                userId: req.user.id
            }, 
            { status },
            { new: true }
        );
        
        if (!ticket){
            return res.status(404).json({ message : "Ticket not found" })
        }
        res.json(ticket);
    } catch(error){
        return res.status(500).json({ message : error.message});
    }
});

ticketRouter.post("/add", protect, async (req, res) => {
    try {
        const { movieTitle, moviePoster, cinemaName, showDate, showTime, seats, screenType, price } = req.body;

        if (!movieTitle || !moviePoster || !cinemaName || !showDate || !showTime || !seats || !screenType || !price) {
            return res.status(400).json({ 
                message: "All fields are required" 
            });
        }

        const ticket = new Ticket({
            movieTitle,
            moviePoster,
            cinemaName,
            showDate: new Date(showDate),
            showTime,
            seats,
            screenType,
            price,
            userId: req.user.id,
            status: 'active'
        });

        const savedTicket = await ticket.save();
        
        res.status(201).json({
            message: "Ticket created successfully",
            ticketId: savedTicket.ticketId,
            ticket: savedTicket
        });
    } catch (error) {
        console.error('Ticket creation error:', error);
        return res.status(500).json({ 
            message: "Failed to create ticket",
            error: error.message 
        });
    }
})

ticketRouter.get("/history", async (req,res) => {
    try {
        const tickets = await Ticket.find({
            userId: req.user.id,
            status: { $in: ['used', 'cancelled']}
        })
        if(!tickets.length){
            return res.status(404).json({ message: "No ticket history found"});
        }
        res.json(tickets);
    } catch (error){
        return res.status(500).json({ message: error.message });
    }
});

module.exports = ticketRouter;
