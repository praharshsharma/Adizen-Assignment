const User = require('../models/user'); // Import the User model
const Product = require('../models/product'); // Import the Product model
const ErrorHandler = require('../utils/errorHandler'); // Import the custom error handler

// Add item to cart
const addToCart = async (req, res, next) => {
    const { email, productId } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email: email });
        if (!user) {
            return next(new ErrorHandler("User not found", 404));
        }

        // Find product by ID
        const product = await Product.findById(productId);
        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
        }

        // Check if the product is already in the cart
        const existingItemIndex = user.cart.items.findIndex(item => item.productId.toString() === productId);

        if (existingItemIndex !== -1) {
            // If the product exists in the cart, increment its quantity
            user.cart.items[existingItemIndex].quantity += 1;
        } else {
            // Otherwise, add the product with quantity 1
            user.cart.items.push({
                productId,
                quantity: 1,
                price: product.price // Use product's price
            });
        }

        // Recalculate total amount
        let newTotalAmount = 0;
        user.cart.items.forEach(item => {
            newTotalAmount += item.quantity * item.price;
        });

        // Update total amount
        user.cart.totalAmount = newTotalAmount;

        // Save the updated user document
        await user.save();

        res.status(200).json({
            success: true,
            message: "Product added to cart successfully",
            cart: user.cart
        });
    } catch (error) {
        next(error); // Pass error to the error handler
    }
};

const getCart = async (req, res, next) => {
    const { email } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email: email });
        if (!user) {
            return next(new ErrorHandler("User not found", 404));
        }

        // Return the user's cart
        res.status(200).json({
            success: true,
            cart: user.cart
        });
    } catch (error) {
        next(error); // Pass error to the error handler
    }
};

const decreaseQuantity = async (req, res, next) => {
    const { email, productId } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email: email });
        if (!user) {
            return next(new ErrorHandler("User not found", 404));
        }

        const cart = user.cart;

        // Find the product in the cart
        const productIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if (productIndex === -1) {
            return next(new ErrorHandler("Product not found in cart", 404));
        }

        const product = cart.items[productIndex];

        // Decrease the quantity
        product.quantity -= 1;

        // If quantity becomes 0, remove the product from the cart
        if (product.quantity === 0) {
            cart.items.splice(productIndex, 1);
        } else {
            cart.items[productIndex] = product;
        }

        // Update the total amount
        cart.totalAmount -= product.price;

        // Save the user document
        await user.save();

        res.status(200).json({
            success: true,
            message: "Product quantity decreased successfully",
            cart
        });
    } catch (error) {
        next(error); // Pass error to the error handler
    }
};
module.exports = { addToCart,getCart, decreaseQuantity};