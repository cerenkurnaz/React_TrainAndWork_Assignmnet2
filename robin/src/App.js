import PropTypes from "prop-types";
import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ProductDetails from './pages/ProductDetails';
import BlogDetails from './pages/BlogDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderTracking from './pages/OrderTracking';


function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/ProductDetails" element={<ProductDetails/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/BlogDetails" element={<BlogDetails/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Checkout" element={<Checkout/>} />
        <Route path="/OrderTracking" element={<OrderTracking/>} />
      </Routes>
    </div>
  );
}

export default App;
