import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from 'react-redux';
import "./App.scss";

//Context
import CartContextProvider from './context/CartContextProvider';

//Store
import store from './redux/store';

//Component
import Store from './components/Store';
import Details from './components/Details';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

const App = () => {
  return (
    <CartContextProvider>
        <Provider store={ store } >
          <Navbar />
          <Routes>
            <Route path='/cart' element={<Cart />} />
            <Route path='/store' element={<Store />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/*' element={<Navigate to="/store" />} />
          </Routes>
        </Provider>
    </CartContextProvider>
  );
};

export default App;