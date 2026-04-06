import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiInfo, FiBook, FiMail, FiPackage, FiMenu, FiX, FiHome } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartItems } = useCart();
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="container nav-content">
                <div className="logo">
                    <div className="logo-icon">
                        <span className="icon-bar red"></span>
                        <span className="icon-bar blue"></span>
                        <span className="icon-bar yellow"></span>
                    </div>
                    <span className="logo-text">BOOKSTORE</span>
                </div>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className="nav-link">
                        <FiInfo /> About
                    </NavLink>
                    <NavLink to="/books" className="nav-link">
                        <FiBook /> Books
                    </NavLink>
                    <NavLink to="/contact" className="nav-link">
                        <FiMail /> Contact
                    </NavLink>
                    <NavLink to="/orders" className="nav-link">
                        <FiPackage /> My Orders
                    </NavLink>
                </div>

                <div className="nav-actions">
                    <div className="desktop-only action-btns">
                        <button className="icon-btn cart-btn">
                            <FiShoppingCart />
                            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        </button>
                        <button className="icon-btn profile-btn">
                            <FiUser />
                        </button>
                    </div>
                    <button className="menu-toggle mobile-only" onClick={toggleMenu}>
                        <FiMenu />
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className={`mobile-sidebar ${isMenuOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="logo">
                        <div className="logo-icon">
                            <span className="icon-bar red"></span>
                            <span className="icon-bar blue"></span>
                            <span className="icon-bar yellow"></span>
                        </div>
                        <span className="logo-text">BOOKSHELL</span>
                    </div>
                    <button className="close-btn" onClick={closeMenu}>
                        <FiX />
                    </button>
                </div>

                <div className="sidebar-links">
                    <NavLink to="/" className="sidebar-link" onClick={closeMenu}>
                        <FiHome className="link-icon" /> Home
                    </NavLink>
                    <NavLink to="/about" className="sidebar-link" onClick={closeMenu}>
                        <FiInfo className="link-icon" /> About
                    </NavLink>
                    <NavLink to="/books" className="sidebar-link" onClick={closeMenu}>
                        <FiBook className="link-icon" /> Books
                    </NavLink>
                    <NavLink to="/contact" className="sidebar-link" onClick={closeMenu}>
                        <FiMail className="link-icon" /> Contact
                    </NavLink>
                    <NavLink to="/orders" className="sidebar-link" onClick={closeMenu}>
                        <FiPackage className="link-icon" /> My Orders
                    </NavLink>
                </div>

                <div className="sidebar-footer">
                    <button className="sidebar-action-btn">
                        <div className="cart-icon-wrapper">
                            <FiShoppingCart />
                            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        </div>
                    </button>
                    <button className="sidebar-action-btn">
                        <FiUser />
                    </button>
                </div>
            </div>
            {isMenuOpen && <div className="sidebar-overlay" onClick={closeMenu}></div>}
        </nav>
    );
};

export default Navbar;
