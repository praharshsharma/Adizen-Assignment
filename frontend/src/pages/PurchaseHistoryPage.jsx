import React, { useState } from 'react';
import PurchaseHistoryCard from '../components/PurchaseHistoryCard';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';

const PurchaseHistoryPage = () => {
  // Sample purchase history data
  const initialPurchases = [
    {
      purchaseId: 'P12345',
      productId: '1001',
      productName: 'Product 1',
      quantity: 2,
      price: 29.99,
      purchaseDate: '2024-11-10T14:30:00Z',
    },
    {
      purchaseId: 'P12346',
      productId: '1002',
      productName: 'Product 2',
      quantity: 1,
      price: 49.99,
      purchaseDate: '2024-11-12T10:15:00Z',
    },
    {
      purchaseId: 'P12347',
      productId: '1003',
      productName: 'Product 3',
      quantity: 3,
      price: 19.99,
      purchaseDate: '2024-11-15T08:45:00Z',
    },
  ];

  const [purchases, setPurchases] = useState(initialPurchases);

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h3" component="h1" align="center" sx={{ marginBottom: 3 }}>
        Your Purchase History
      </Typography>

      {/* Purchase History List */}
      <Box>
        {purchases.length === 0 ? (
          <Paper sx={{ padding: 3, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary">
              You haven't made any purchases yet!
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={3}>
            {purchases.map(purchase => (
              <Grid item xs={12} sm={6} md={4} key={purchase.purchaseId}>
                <PurchaseHistoryCard purchase={purchase} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default PurchaseHistoryPage;
