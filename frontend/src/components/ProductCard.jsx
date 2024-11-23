import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ProductCard = ({ name, price, image, description }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
      {/* Product Image */}
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
      />

      {/* Product Details */}
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
          {description}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
          ${price}
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

