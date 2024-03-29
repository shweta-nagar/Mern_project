const express = require('express');
const contactform = require('../controllers/contact-controller');
const router = express.Router();

router.post('/contact',contactform)

module.exports = router;