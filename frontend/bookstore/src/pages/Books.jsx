import React, { useState } from 'react';
import { FiSearch, FiFilter, FiChevronDown } from 'react-icons/fi';
import './Books.css';

import adfressImg from '../assets/adfress.jpg';
import fekerEskMakaberImg from '../assets/feker_esk_makaber.jpg';
import imagePng from '../assets/image.png';
import oromiaImg from '../assets/oromia.jpg';
import ha2Img from '../assets/HA2.png';
import lionOfGazeImg from '../assets/lion of gaze.jpg';
import theBeautifulImg from '../assets/the-beautiful.jpg';
import burkaZemetaImg from '../assets/burka zemeta.jpg';

// New images added by user
import shopping2Img from '../assets/shopping (2).avif';
import shoppingImg from '../assets/shopping.avif';
import shoppingWebp from '../assets/shopping.webp';
import waxAndGoldImg from '../assets/wax and gold.png';
import downloadImg from '../assets/download.png';
import download1Img from '../assets/download (1).jpeg';
import hacker3Img from '../assets/hacker3).png';
import millionerImg from '../assets/millioner.png';

const Books = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const books = [
        {
            id: 1,
            title: "Literary Foundations",
            author: "Stacker",
            image: adfressImg,
            category: "Classic"
        },
        {
            id: 2,
            title: "How Innovation Works",
            author: "Matt Ridley",
            image: fekerEskMakaberImg,
            category: "Business"
        },
        {
            id: 3,
            title: "Emma Elliot",
            author: "Author Name",
            image: imagePng,
            category: "Fiction"
        },
        {
            id: 4,
            title: "Pages of Time",
            author: "History Maker",
            image: oromiaImg,
            category: "History"
        },
        {
            id: 5,
            title: "Modern Design",
            author: "Creative Mind",
            image: ha2Img,
            category: "Art"
        },
        {
            id: 6,
            title: "Future Tech",
            author: "AI Explorer",
            image: lionOfGazeImg,
            category: "Technology"
        },
        {
            id: 7,
            title: "Nature's Whispers",
            author: "Eco Warrior",
            image: theBeautifulImg,
            category: "Science"
        },
        {
            id: 8,
            title: "The Art of War",
            author: "Sun Tzu",
            image: burkaZemetaImg,
            category: "Strategy"
        },
        {
            id: 9,
            title: "Wax and Gold",
            author: "Donald N. Levine",
            image: waxAndGoldImg,
            category: "History"
        },
        {
            id: 10,
            title: "Shopping Experience",
            author: "Retail Expert",
            image: shoppingImg,
            category: "Business"
        },
        {
            id: 11,
            title: "Consumer Guide",
            author: "Buyer Advisor",
            image: shopping2Img,
            category: "Lifestyle"
        },
        {
            id: 12,
            title: "Web Shopping",
            author: "Online Store",
            image: shoppingWebp,
            category: "Technology"
        },
        {
            id: 13,
            title: "Downloaded Journey",
            author: "Anonymous",
            image: downloadImg,
            category: "Adventure"
        },
        {
            id: 14,
            title: "Second Download",
            author: "Unknown Source",
            image: download1Img,
            category: "Mystery"
        },
        {
            id: 15,
            title: "Hacker's Handbook",
            author: "Cyber Specialist",
            image: hacker3Img,
            category: "Technology"
        },
        {
            id: 16,
            title: "The Millionaire Mind",
            author: "Wealth Coach",
            image: millionerImg,
            category: "Business"
        }
    ];

    return (
        <div className="books-page">
            <section className="books-header section-padding">
                <div className="container">
                    <h1 className="books-title fade-in">Literary Universe</h1>
                    <p className="books-subtitle fade-in">Explore our curated collection spanning genres and perspectives</p>

                    <div className="books-controls fade-in">
                        <div className="search-bar-wrapper">
                            <FiSearch className="search-bar-icon" />
                            <input
                                type="text"
                                placeholder="Search titles, authors..."
                                className="books-search-input"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="filters-row">
                            <div className="filter-dropdowns">
                                <div className="dropdown">
                                    <span>All Genres</span>
                                    <FiChevronDown />
                                </div>
                                <div className="dropdown">
                                    <span>Sort by Title</span>
                                    <FiChevronDown />
                                </div>
                            </div>
                            <div className="results-count">
                                Showing 16 results
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="books-grid-section container">
                <div className="books-grid">
                    {books.map(book => (
                        <div key={book.id} className="book-card scale-in">
                            <div className="book-image">
                                <img src={book.image} alt={book.title} />
                                <div className="book-overlay">
                                    <button className="view-details-btn">View Details</button>
                                </div>
                            </div>
                            <div className="book-info">
                                <span className="book-category">{book.category}</span>
                                <h3 className="book-title">{book.title}</h3>
                                <p className="book-author">{book.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Books;
