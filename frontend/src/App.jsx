import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Main from './pages/Main';
import PurchaseHistoryPage from './pages/PurchaseHistoryPage';
import Profile from './pages/Profile';
import CheckoutPage from './pages/CheckoutPage';
import AuthPage from './pages/AuthPage';

const App = () => {


  return (
    <BrowserRouter>
        <>
        <div id="x">
        <Navbar />
        <Routes>
          <Route path='/cart' element={<Cart />} />
          <Route path = '/' element={<Main />} />
          <Route path = '/history' element={<PurchaseHistoryPage />} />
          <Route path = '/profile' element={<Profile />} />
          <Route path = '/check' element={<CheckoutPage />} />
          <Route path = '/auth' element={<AuthPage />} />
        </Routes>
        <Footer />
        </div>

        
       

        

        </>

        </BrowserRouter>
     
  );
};

export default App;
