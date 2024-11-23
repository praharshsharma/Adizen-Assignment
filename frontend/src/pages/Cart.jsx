import React, { useState } from 'react';
import { Typography, Button, Box, Container } from '@mui/material';
import CartCard from '../components/CartCard';

const Cart = () => {
  const initialCartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      quantity: 1,
      image: 'https://via.placeholder.com/150',
      description: 'This is a description for Product 1.',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      quantity: 1,
      image: 'https://via.placeholder.com/150',
      description: 'This is a description for Product 2.',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      quantity: 1,
      image: 'https://via.placeholder.com/150',
      description: 'This is a description for Product 3.',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 59.99,
      quantity: 1,
      image: 'https://via.placeholder.com/150',
      description: 'This is a description for Product 4.',
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Handle quantity change directly
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    }
  };

  // Handle item removal
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <>      
      {/* Fixed title */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          color: '#333',
          fontWeight: 'bold',
          backgroundColor: 'white',
          position:'sticky',
          top: '4rem',
          zIndex: 10,
          padding: '10px 0',
          boxShadow: '0px 4px 2px -2px gray',
        }}
      >
        Your Shopping Cart
      </Typography>

      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
          
          {/* Cart Items Section (Left Column) */}
          <div style={{ flex: 1, marginRight: '20px' }}>
            {cartItems.length === 0 ? (
              <Typography variant="h6" align="center" color="textSecondary">
                Your cart is empty!
              </Typography>
            ) : (
              cartItems.map(item => (
                <CartCard
                  key={item.id}
                  product={item}
                  onRemove={handleRemoveItem}
                  onQuantityChange={handleQuantityChange}
                  sx={{ marginBottom: '20px', width: '100%' }}  
                />
              ))
            )}
          </div>

          {/* Fixed Total and Checkout Section (Right Column) */}
          <Box
            sx={{
              position: 'fixed',
              top: '20rem', // Fixed position at 5rem from the top
              right: 20,
              width: '300px',
              padding: 3,
              boxShadow: 3,
              borderRadius: '10px',
              backgroundColor: 'white',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              Total: ${calculateTotal()}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: '100%',
                padding: '12px',
                borderRadius: '30px',
                fontWeight: 'bold',
                boxShadow: 2,
                '&:hover': {
                  boxShadow: 6,
                },
              }}
              onClick={() => alert('Proceeding to Checkout')}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </div>
      </Container>
    </>
  );
};

export default Cart;
