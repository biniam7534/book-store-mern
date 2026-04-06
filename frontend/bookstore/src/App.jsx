import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Contact from './pages/Contact';
import Orders from './pages/Orders';
import { CartProvider } from './context/CartContext';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/books" element={<Books />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
