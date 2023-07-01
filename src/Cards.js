import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import App from './App';
import MyCart from './MyCart';
import './Card.css'

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
    <div className='nav'>
    <h2> Shopping Cart</h2>
    <nav className='nav-left'>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/cart">Cart Page({cart.length})</Link>
        </li>
      </ul>
    </nav>
    </div>
    </>
  );
};

const Cards = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<MyCart />} />
      </Routes>
    </Router>
  );
};

export default Cards;
