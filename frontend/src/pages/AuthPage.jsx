import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Grid, FormControlLabel, Checkbox, Link, Divider } from '@mui/material';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Toggle between login and signup
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Handle form submission (for now just logging the data)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic here
      console.log('Login with:', formData.email, formData.password);
    } else {
      // Signup logic here
      console.log('Signup with:', formData);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: '50px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          {isLogin ? 'Login' : 'Sign Up'}
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Name field (only for Signup) */}
          {!isLogin && (
            <TextField
              label="Full Name"
              name="name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleChange}
            />
          )}

          {/* Email field */}
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          {/* Password field */}
          <TextField
            label="Password"
            name="password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />

          {/* Confirm Password field (only for Signup) */}
          {!isLogin && (
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          )}

          {/* Remember me checkbox (only for Login) */}
          {isLogin && (
            <FormControlLabel
              control={<Checkbox name="remember" />}
              label="Remember me"
              sx={{ marginBottom: '16px' }}
            />
          )}

          {/* Submit button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: '16px', padding: '12px' }}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>

          {/* Divider between forms */}
          <Box sx={{ marginTop: '16px', textAlign: 'center' }}>
            <Divider sx={{ marginBottom: '16px' }} />
            <Typography variant="body2">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <Link href="#" onClick={toggleForm} sx={{ cursor: 'pointer' }}>
                {isLogin ? 'Sign Up' : 'Login'}
              </Link>
            </Typography>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default AuthPage;
