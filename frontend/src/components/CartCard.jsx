import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const CartCard = ({ product, onRemove, onQuantityChange }) => {

  const handleIncreaseQuantity = () => {
    onQuantityChange(product.id, product.quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (product.quantity > 1) {
      onQuantityChange(product.id, product.quantity - 1);
    }
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', maxWidth: 700, mb: 2, boxShadow: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 300, height: 200, objectFit: 'cover' }}
        image={product.image}
        alt={product.name}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {product.description}
        </Typography>
        <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold' }}>
          ${product.price}
        </Typography>
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">Quantity:</Typography>
          <IconButton onClick={handleDecreaseQuantity} size="small">
            <Remove />
          </IconButton>
          <Typography variant="body2" sx={{ marginX: 1 }}>
            {product.quantity}
          </Typography>
          <IconButton onClick={handleIncreaseQuantity} size="small">
            <Add />
          </IconButton>
        </div>
        <Button
          variant="contained"
          color="error"
          onClick={() => onRemove(product.id)}
          sx={{ marginTop: 2, width: '100%' }}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  );
};

export default CartCard;
