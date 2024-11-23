const Order = require('../models/order');
const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandler');

// Place an order
const placeOrder = async (req, res, next) => {
    const { email, address } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return next(new ErrorHandler("User not found", 404));
        }

        // Ensure the cart has items
        const cart = user.cart;
        if (!cart || cart.items.length === 0) {
            return next(new ErrorHandler("Cart is empty", 400));
        }

        // Prepare the order data
        const products = cart.items.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
        }));

        const totalAmount = cart.totalAmount;

        // Create the order
        const order = await Order.create({
            products,
            totalAmount,
            address
        });
        
        // Update user's order history
        user.history.push({orderId: order._id});

        // Clear the user's cart
        user.cart = { items: [], totalAmount: 0 };

        // Save the updated user document
        await user.save();

        res.status(201).json({
            success: true,
            message: "Order placed successfully",
            order
        });
    } catch (error) {
        next(error); // Pass error to error handler
    }
};
module.exports = { placeOrder};
