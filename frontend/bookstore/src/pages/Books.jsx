import React, { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiChevronDown, FiShoppingCart } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
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
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const initialSearch = queryParams.get('search') || '';

    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedAuthor, setSelectedAuthor] = useState('');
    const [sortBy, setSortBy] = useState('');

    useEffect(() => {
        const query = new URLSearchParams(location.search).get('search');
        if (query !== null) {
            setSearchTerm(query);
        }
    }, [location.search]);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value.trim()) {
            navigate(`/books?search=${encodeURIComponent(value)}`, { replace: true });
        } else {
            navigate('/books', { replace: true });
        }
    };

    const books = [
        {
            id: 1,
            title: "Adefress",
            author: "Alemayehu werku",
            image: adfressImg,
            category: "Novel",
            price: 200.00
        },
        {
            id: 2,
            title: "Fikir Eske Mekabir",
            author: "Haddis Alemayehu",
            image: fekerEskMakaberImg,
            category: "Novel",
            price: 180.00
        },
        {
            id: 3,
            title: "The Future of the Mind",
            author: "Michio Kaku",
            image: imagePng,
            category: "Science",
            price: 210.00
        },
        {
            id: 4,
            title: "Oromia",
            author: "Baalu Girma",
            image: oromiaImg,
            category: "Novel",
            price: 300.00
        },
        {
            id: 5,
            title: "Thinking, Fast and Slow",
            author: "Daniel Kahneman",
            image: ha2Img,
            category: "Psychology",
            price: 355.00
        },
        {
            id: 6,
            title: "The Lion of Gaze",
            author: "Maaza Mengiste",
            image: lionOfGazeImg,
            category: "Novel",
            price: 190.90
        },
        {
            id: 7,
            title: "The Beautiful Things That Heaven Bears",
            author: "Dinaw Mengestu",
            image: theBeautifulImg,
            category: "Dinaw Mengestu",
            price: 255.00
        },
        {
            id: 8,
            title: "Burka Zemeta",
            author: "Tasfaye Gebremedhin",
            image: burkaZemetaImg,
            category: "Novel",
            price: 199.00

        },
        {
            id: 9,
            title: "Wax and Gold",
            author: "Donald N. Levine",
            image: waxAndGoldImg,
            category: "History",
            price: 210.00
        },
        {
            id: 10,
            title: "The silent of wife",
            author: "Kerry Fisher",
            image: shoppingImg,
            category: "Novel",
            price: 240.00
        },
        {
            id: 11,
            title: "No.1 Lawyer",
            author: "james patterson & Nancy Allen",
            image: shopping2Img,
            category: "Thriller",
            price: 260.00
        },
        {
            id: 12,
            title: "You Are 7 and Amazing",
            author: "Unknown",
            image: shoppingWebp,
            category: "Childern",
            price: 270.00
        },
        {
            id: 13,
            title: "The Sigma Male Bible",
            author: "Bud Watson",
            image: downloadImg,
            category: "Personal development",
            price: 190.99
        },
        {
            id: 14,
            title: "The Subtle Art of Not Giving a F*ck",
            author: "Mark Manson",
            image: download1Img,
            category: "Men’s psychology",
            price: 200.00
        },
        {
            id: 15,
            title: "Hacker's Handbook",
            author: "Kline Thornton",
            image: hacker3Img,
            category: "Technology",
            price: 220.99
        },
        {
            id: 16,
            title: "The Millionaire Booklet",
            author: "Grant Cardone",
            image: millionerImg,
            category: "Business",
            price: 215.00
        }
    ];

    const [fetchedBooks, setFetchedBooks] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get("http://localhost:5555/api/books");
                if (res.data && res.data.data && res.data.data.length > 0) {
                    setFetchedBooks(res.data.data);
                }
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        fetchBooks();
    }, []);

    // Combine hardcoded mock books with fetched DB books (by avoiding exact title duplicates)
    const displayBooks = [...books];
    fetchedBooks.forEach(dbBook => {
        if (!displayBooks.find(b => b.title === dbBook.title)) {
            displayBooks.push(dbBook);
        }
    });

    const genres = [...new Set(displayBooks.map(book => book.category || 'General'))];
    const authors = [...new Set(displayBooks.map(book => book.author))].filter(Boolean);

    // Apply search filter and dropdown filters
    let filteredBooks = displayBooks.filter(book => {
        const matchesSearch =
            (book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (book.author && book.author.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (book.category && book.category.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (book.description && book.description.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesGenre = selectedGenre ? (book.category || 'General') === selectedGenre : true;
        const matchesAuthor = selectedAuthor ? book.author === selectedAuthor : true;

        return matchesSearch && matchesGenre && matchesAuthor;
    });

    if (sortBy === 'title-asc') {
        filteredBooks.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
    } else if (sortBy === 'title-desc') {
        filteredBooks.sort((a, b) => (b.title || '').localeCompare(a.title || ''));
    }

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
                                onChange={handleSearchChange}
                            />
                        </div>

                        <div className="filters-row">
                            <div className="filter-dropdowns">
                                <select
                                    className="dropdown"
                                    value={selectedGenre}
                                    onChange={(e) => setSelectedGenre(e.target.value)}
                                    style={{ border: 'none', outline: 'none', cursor: 'pointer' }}
                                >
                                    <option value="">All Topics</option>
                                    {genres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
                                </select>

                                <select
                                    className="dropdown"
                                    value={selectedAuthor}
                                    onChange={(e) => setSelectedAuthor(e.target.value)}
                                    style={{ border: 'none', outline: 'none', cursor: 'pointer' }}
                                >
                                    <option value="">All Authors</option>
                                    {authors.map(author => <option key={author} value={author}>{author}</option>)}
                                </select>

                                <select
                                    className="dropdown"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    style={{ border: 'none', outline: 'none', cursor: 'pointer' }}
                                >
                                    <option value="">Sort by Title</option>
                                    <option value="title-asc">Title: A to Z</option>
                                    <option value="title-desc">Title: Z to A</option>
                                </select>
                            </div>
                            <div className="results-count">
                                Showing {filteredBooks.length} results
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="books-grid-section container">
                <div className="books-grid">
                    {filteredBooks.map(book => (
                        <div key={book.id || book._id} className="book-card scale-in">
                            <div className="book-image">
                                <img src={book.image || imagePng} alt={book.title} />
                                <div className="book-overlay">
                                    <button className="view-details-btn" onClick={() => { addToCart(book); alert('Added to cart!'); }}>
                                        <FiShoppingCart /> Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="book-info">
                                <span className="book-category">{book.category || 'General'}</span>
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
