import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  FormControlLabel,
  Checkbox,
  Link,
  Divider,
} from "@mui/material";
import signup from "../api/api";
import { signin } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { authSuccess, authstore } from "../Redux/userSlice";

const AuthPage = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const { isLoggedIn, currentUser } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        const res = await signin({
          email: formData.email,
          password: formData.password,
        });

        dispatch(authSuccess(res.data));
        dispatch(
          authstore({
            email: formData.email,
            password: formData.password,
          })
        );
      } catch {
        alert("wrong ID or password");
        console.log(e);
      }
    } else {
      if (signup(formData) == 200) window.location.href = "/";
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: "50px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          {isLogin ? "Login" : "Sign Up"}
        </Typography>

        <form onSubmit={handleSubmit}>
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

          {!isLogin && (
            <TextField
              label="phone"
              name="phone"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              value={formData.phone}
              onChange={handleChange}
            />
          )}

          {isLogin && (
            <FormControlLabel
              control={<Checkbox name="remember" />}
              label="Remember me"
              sx={{ marginBottom: "16px" }}
            />
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: "16px", padding: "12px" }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>

          <Box sx={{ marginTop: "16px", textAlign: "center" }}>
            <Divider sx={{ marginBottom: "16px" }} />
            <Typography variant="body2">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <Link href="#" onClick={toggleForm} sx={{ cursor: "pointer" }}>
                {isLogin ? "Sign Up" : "Login"}
              </Link>
            </Typography>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default AuthPage;
