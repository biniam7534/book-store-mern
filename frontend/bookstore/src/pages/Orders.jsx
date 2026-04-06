import React, { useState } from 'react';
import { FiArrowLeft, FiTrash2, FiPlus, FiMinus, FiShoppingBag } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import './Orders.css';

import book1Img from '../assets/download.png';
import book2Img from '../assets/hacker3).png';

const Orders = () => {
    const navigate = useNavigate();
    const { cartItems, updateQuantity, removeItem, clearCart } = useCart();

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.15; // 15% mock tax
    const totalAmount = subtotal + tax;

    const handleCheckout = async () => {
        if (cartItems.length === 0) return;
        try {
            const orderData = {
                orderId: `ORD-${Math.floor(Math.random() * 1000000)}`,
                date: new Date().toISOString().split('T')[0],
                amount: totalAmount.toFixed(2),
                payment: "Card",
                status: "Processing"
            };
            const response = await axios.post("http://localhost:5555/api/orders", orderData);
            if (response.status === 201) {
                alert("Order created successfully!");
                clearCart();
            }
        } catch (error) {
            console.error("Error creating order", error);
            alert("Failed to place order.");
        }
    };

    return (
        <div className="orders-page">
            <div className="orders-container container">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <FiArrowLeft /> Back to Shop
                </button>

                <div className="cart-header">
                    <h1 className="orders-title">My Reading Cart</h1>
                    <span className="cart-count">{cartItems.length} Items</span>
                </div>

                {cartItems.length > 0 ? (
                    <div className="cart-layout">
                        <div className="cart-items-section fade-in">
                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item-card">
                                    <img src={item.image} alt={item.title} className="cart-item-image" />

                                    <div className="cart-item-details">
                                        <h3 className="cart-item-title">{item.title}</h3>
                                        <p className="cart-item-author">{item.author}</p>
                                        <p className="cart-item-price">ETB {item.price.toFixed(2)}</p>
                                    </div>

                                    <div className="cart-item-actions">
                                        <div className="quantity-controls">
                                            <button className="qty-btn" onClick={() => updateQuantity(item.id || item._id, -1)}>
                                                <FiMinus />
                                            </button>
                                            <span className="qty-value">{item.quantity}</span>
                                            <button className="qty-btn" onClick={() => updateQuantity(item.id || item._id, 1)}>
                                                <FiPlus />
                                            </button>
                                        </div>
                                        <div className="cart-item-total">
                                            ETB {(item.price * item.quantity).toFixed(2)}
                                        </div>
                                        <button className="remove-btn" onClick={() => removeItem(item.id || item._id)} title="Remove item">
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-summary-section fade-in">
                            <h2 className="summary-title">Order Summary</h2>
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>ETB {subtotal.toFixed(2)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Tax (15%)</span>
                                <span>ETB {tax.toFixed(2)}</span>
                            </div>
                            <div className="summary-divider"></div>
                            <div className="summary-row total">
                                <span>Total Amount</span>
                                <span>ETB {totalAmount.toFixed(2)}</span>
                            </div>

                            <button className="checkout-btn" onClick={handleCheckout}>
                                Proceed to Checkout <FiShoppingBag />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="empty-cart fade-in">
                        <FiShoppingBag className="empty-cart-icon" />
                        <h2>Your cart is empty</h2>
                        <p>Looks like you haven't added any books to your cart yet.</p>
                        <button className="continue-shopping-btn" onClick={() => navigate('/books')}>
                            Browse Books
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;
