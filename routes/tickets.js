const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');




router.get("/flights/:id/tickets/new", ticketsCtrl.addTicketPage);
router.post("/flights/:id/tickets", ticketsCtrl.createTicket);



module.exports = router;