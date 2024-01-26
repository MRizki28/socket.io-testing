const express = require('express');
const router = express.Router();
const messageAPI = require('./API/MessageAPI');


router.use('/api/v1/message', messageAPI)

module.exports = router;