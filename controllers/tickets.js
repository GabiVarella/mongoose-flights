const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

module.exports = {
    addTicketPage,
    createTicket,
}

function createTicket(req, res){
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err){
        res.redirect(`/flights/${req.params.id}`);
    })
};

function addTicketPage(req, res){
    Flight.findById(req.params.id, function(err, flight){
        res.render("tickets/new", {flight});
    })
};