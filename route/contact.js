const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('We are on Home in contact');
});
router.get('/contact', (req, res) => {
    res.send('We are on Contact');
});

module.exports = router;