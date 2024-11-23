const express = require('express');
const { addToCart,getCart,decreaseQuantity} = require('../controllers/cart');

const router = express.Router();
// Route to add an item to the cart
router.post('/addtocart', addToCart);
router.get('/getcart', getCart);
router.post('/decreasequantity', decreaseQuantity);
module.exports = router;
