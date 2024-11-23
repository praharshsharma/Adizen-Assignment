const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Order = require('../models/order');
const ErrorHandler = require('../utils/errorHandler');

const signupUser = async (req, res, next) => {
    const { name, phone, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next(new ErrorHandler("User already exists!", 400));
        }

        const hashPassword = await bcrypt.hash(password, 10);
        // console.log(hashPassword);

        const result = await User.create({
            name,
            phone,
            email,
            password: hashPassword,
        });

        // Generate a JWT token
        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },
            process.env.JSON_WEB_TOKEN_SECRET_KEY,
            { expiresIn: "1h" } // Set token expiration
        );

        res.status(200).json({
            user: result,
            token: token
        });
    } catch (error) {
        next(new ErrorHandler("Something went wrong", 500));
    }
};

const signinUser = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return next(new ErrorHandler("User not found", 404));
        }

        // Validate the password
        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if (!matchPassword) {
            return next(new ErrorHandler("Invalid credentials", 400));
        }

        // Generate a JWT token
        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },
            process.env.JSON_WEB_TOKEN_SECRET_KEY,
            { expiresIn: "1h" } // Set token expiration
        );

        // Respond with user data and token
        res.status(200).json({
            user: existingUser,
            token,
            msg: "User authenticated",
        });
    } catch (error) {
        console.error(error);
        next(new ErrorHandler("Something went wrong", 500));
    }
};

const getUserHistory = async (req, res, next) => {
    const { email } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return next(new ErrorHandler("User not found", 404));
        }

        // Check if user has order history
        if (!user.history || user.history.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No order history found",
                orders: []
            });
        }

        // Fetch all orders from the history
        const orderIds = user.history.map(historyItem => historyItem.orderId);
        const orders = await Order.find({ _id: { $in: orderIds } });

        res.status(200).json({
            success: true,
            orders
        });
    } catch (error) {
        next(new ErrorHandler("Something went wrong", 500));
    }
};

const logoutUser = (req, res) => {
    try {
        // If the token is stored in cookies, clear it
        res.cookie('token', '', { expires: new Date(0) });

        res.status(200).json({
            success: true,
            message: "User logged out successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};

module.exports = { signupUser, signinUser, getUserHistory, logoutUser};
