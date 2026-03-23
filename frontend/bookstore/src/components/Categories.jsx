import React, { useState } from 'react';
import { FiStar, FiShoppingCart, FiPlus, FiMinus } from 'react-icons/fi';
import './Categories.css';

import harryPotterImg from '../assets/millioner.png';
import hyggeImg from '../assets/hacker3).png';
import fiftyShadesImg from '../assets/download.png';
import twoTowersImg from '../assets/Book8.png';

const favoriteBooks = [
    {
        id: 1,
        title: "The Millionaire Booklet: How to Get Super Rich",
        author: "Grant Cardone",
        price: 255.2,
        rating: 4,
        image: harryPotterImg,
        hasQty: false
    },
    {
        id: 2,
        title: "Building Real-World Hacker Skills from Scratch",
        author: "Kline Thornton",
        price: 289.2,
        rating: 4,
        image: hyggeImg,
        hasQty: true
    },
    {
        id: 3,
        title: "The Sigma Male Bible: An Ultimate Guide To The Lone Wolf",
        author: "Bud Watson",
        price: 325.2,
        rating: 5,
        image: fiftyShadesImg,
        hasQty: false
    },
    {
        id: 4,
        title: "The Two Towers",
        author: "J.R.R. Tolkien",
        price: 425.2,
        rating: 4,
        image: twoTowersImg,
        hasQty: false
    }
];

const Categories = () => {
    const [quantities, setQuantities] = useState({ 2: 1 });

    const updateQty = (id, delta) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) + delta)
        }));
    };

    return (
        <section className="favorites-section">
            <div className="container">
                <div className="section-header centered">
                    <h2 className="section-title">Bookstore Favorites</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="favorites-grid">
                    {favoriteBooks.map(book => (
                        <div key={book.id} className="favorite-card">
                            <div className="favorite-image-container">
                                <img src={book.image} alt={book.title} className="favorite-image" />
                                <div className="rating-pill">
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar
                                            key={i}
                                            className={i < book.rating ? "star-icon" : "star-icon empty"}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="favorite-info">
                                <h3 className="favorite-title">{book.title}</h3>
                                <p className="favorite-author"><span>{book.author}</span> best author in this week</p>
                                <div className="favorite-price">ETB {book.price.toFixed(1)}</div>

                                {book.hasQty ? (
                                    <div className="quantity-selector">
                                        <button className="qty-btn" onClick={() => updateQty(book.id, -1)}><FiMinus /></button>
                                        <span className="qty-value">{quantities[book.id]}</span>
                                        <button className="qty-btn" onClick={() => updateQty(book.id, 1)}><FiPlus /></button>
                                    </div>
                                ) : (
                                    <button className="add-to-cart-btn">
                                        <FiShoppingCart /> Add to Cart
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
