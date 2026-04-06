import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prev => {
            const productId = product.id || product._id;
            const existing = prev.find(item => (item.id || item._id) === productId);
            if (existing) {
                return prev.map(item =>
                    (item.id || item._id) === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1, price: Number(product.price) || 150 }];
        });
    };

    const updateQuantity = (id, delta) => {
        setCartItems(prev => prev.map(item => {
            if ((item.id || item._id) === id) {
                return { ...item, quantity: Math.max(1, item.quantity + delta) };
            }
            return item;
        }));
    };

    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => (item.id || item._id) !== id));
    };

    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
