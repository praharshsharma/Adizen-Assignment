const express = require('express');
const router = express.Router();
const { placeOrder} = require('../controllers/order');


// Route to place an order
router.post('/placeorder', placeOrder);

module.exports = router;
