# Adizen-Assignment

# E-Commerce Application (PShop)

# 🧭 Table of contents
•⁠  ⁠[Introduction](#introduction)
•⁠  ⁠[Demo](#demo)
•⁠  ⁠[Installation(Set-up Instructions)](#installation)
•⁠  ⁠[Features](#features)
•⁠  ⁠[Technologies Used](#technologies)
•⁠  ⁠[API Endpoints](#api-endpoints)

# Introduction

This project is a basic e-commerce application with core functionalities like product display, cart management, and order processing.

# Demo

Explore the project: [PShop](https://adizen.netlify.app/).<br>
The application is deployed on Netlify.

Video Demo: [Video](https://drive.google.com/file/d/1ZAvPNfCyxcVis6_1aoFI4V_GGhpd26em/view?usp=drive_link).

# Installation

Follow these steps to set up Shoekart on your local machine:

1.  *Clone the Repository:*
    ⁠ bash
    git clone https://github.com/praharshsharma/Adizen-Assignment
     ⁠

2.  *Install Dependencies:*

    Navigate to the client directory and install frontend dependencies:
    ⁠ bash
    cd client
    npm install
     ⁠
    Next, open a new terminal tab, navigate to the server directory, and install backend dependencies:

    ⁠ bash
    cd server
    npm install
     ⁠
3.  *Set up Environment Variables:*

    Create a ⁠ .env ⁠ file in the server directory and define the following variables in the ⁠ .env ⁠ file:


    *For Server:*

    ⁠ plaintext
    PORT = 5001
    MONGO_URI=your_mongodb_uri
    JSON_WEB_TOKEN_SECRET_KEY=your_jwt_secret
     ⁠
4.  *Run the Backend Server:*

    Navigate to the server directory and run:

    ⁠ bash
    nodemon
     ⁠
5.  *Run the Frontend Server:*

    Navigate to the client directory and run:

    ⁠ bash
    npm start
     ⁠
    After running this command, the project will start running locally at http://localhost:3000

# Features

•⁠  ⁠*Responsive Design:* PShop's responsive design ensures optimal desktops, tablets, and smartphone performance, ensuring a seamless shopping experience across devices.

•⁠  ⁠*Cart Management:* Add desired products to your cart, update quantities, and remove items as needed with instant calculation of the total price of your cart.

•⁠  ⁠*Checkout and Order Place:* Implemented seamless checkout flow, with a form to fill in all the details of address and payments and at the end place the order.

•⁠  ⁠*Inventory Management:* Whenever the order is placed the quantity in stock will be updated in the backend.
  
•⁠  ⁠*Order History:* Keep track of past orders and review your order history for easy reference and reordering.

•⁠  ⁠*Order Details:* We can view the entire order details from the order history.

•⁠  ⁠*User Authentication and Authorization (JWT):* Securely authenticate users and manage resource access with JSON Web Tokens (JWT).

•⁠  ⁠*Password stored securely:* ⁠ bcrypt ⁠ is used to convert passwords into a fixed-length character called hash to store it in encrypted form in the database.

•⁠  ⁠*Error Handling:* Centralized error handling is implemented using a custom ErrorHandler class and an errorMiddleware to standardize error responses across the application.

# Technologies

•⁠  ⁠React.js: Frontend library for building the user interface.
•⁠  ⁠Node.js: JavaScript runtime environment for running server-side code.
•⁠  ⁠Express.js: Backend framework for handling HTTP requests and routing.
•⁠  ⁠MongoDB: Database for storing products, user information, and orders.
•⁠  ⁠JWT (JSON Web Tokens): Used for user authentication and authorization.
•⁠  ⁠Axios: Promise-based HTTP client for making AJAX requests from the frontend to the backend.
•⁠  ⁠Redux: State management tool.
•⁠  ⁠Material UI: UI Library.

# API Endpoints

•⁠  ⁠*Authentication:*

  - ⁠ POST /api/users/signup ⁠ - Register a new user.
  - ⁠ POST /api/users/signin ⁠ - User login with email and password.
  - ⁠ POST /api/users/logout ⁠ - User logout.

•⁠  ⁠*Users:*

  - ⁠ GET /api/users/history ⁠ - Get the user's order history
  - ⁠ GET /api/users/:email ⁠ - Get the user details for the profile page.

•⁠  ⁠*Products:*

  - ⁠ GET /api/products ⁠ - Get all products.
  - ⁠ GET /api/products/:id ⁠ - Get a single product by ID.
  - ⁠ POST /api/products/addProduct ⁠ - Create a new product (admin only). Adds it to the database.

•⁠  ⁠*Cart:*

  - ⁠ POST /api/cart/addtocart ⁠ - Add a product to the cart.
  - ⁠ POST /api/cart/getcart ⁠ - To get the cart details of a user.
  - ⁠ POST /api/cart/decreasequantity ⁠ - Decrease the quantity of the product in the cart.
  - ⁠ DELETE /api/cart/removeproduct ⁠ - Delete a product from the cart.

•⁠  ⁠*Orders:*

  - ⁠ POST /api/order/placeorder ⁠ - Place a new order.
  - ⁠ GET /api/order/:email/:orderId ⁠ - To get all the details of a particular order.