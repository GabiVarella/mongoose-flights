const Ticket = require("..models/ticket");
const Flight = require("../models/flight");

module.exports = {
    addTicketPage
}


function addTicketPage(req, res){
    console.log(req.params.id);
    Flight.findById(req.params.id, function(err, flight){
        res.render("flights/:id/tickets/new,", {title: "Add Ticket", flight});
    })
};