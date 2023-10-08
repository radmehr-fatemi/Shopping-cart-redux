import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";

//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

//Component
import Store from './components/Store';
import Details from './components/Details';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

const App = () => {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <Navbar />
        <Routes>
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/store' element={ <Store /> } />
          <Route path='/details/:id' element={ <Details /> } />
          <Route path='/*' element={ <Navigate to="/store" /> } />
        </Routes>
      </ProductContextProvider>
    </CartContextProvider>
  );
};

export default App;