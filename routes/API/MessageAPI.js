const express = require('express');
const router = express.Router();
const MessageController = require("../../App/Controller/MessageController");


const messageController = new MessageController();

router.post('/create', (req, res) => {
    messageController.createMessage(req, res)
});


module.exports = router 