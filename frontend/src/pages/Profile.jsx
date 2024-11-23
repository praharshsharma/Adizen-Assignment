import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const Profile = () => {
  const user = {
    name: 'Praharsh Sharma',
    email: 'praharshsharma1502@example.com',
    phone: '+919662646922',
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Profile
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 3,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: '#f9f9f9',
        }}
      >
        <TextField
          label="Name"
          value={user.name}
          variant="outlined"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Email"
          value={user.email}
          variant="outlined"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Phone Number"
          value={user.phone}
          variant="outlined"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Edit Profile
        </Button>
      </Box>
    </Container>
  );
};

export default Profile;
