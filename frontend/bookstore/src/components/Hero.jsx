import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const [query, setQuery] = useState('');
    const [stats, setStats] = useState({ titles: '16+', topics: '11+' });
    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get("http://localhost:5555/api/books");
                if (res.data && res.data.data) {
                    const dbBooks = res.data.data;
                    const totalTitles = 16 + dbBooks.length;
                    const dbTopics = dbBooks.map(b => b.category).filter(Boolean);
                    const uniqueTopics = new Set([...dbTopics, 'Novel', 'Science', 'Psychology', 'History', 'Thriller', 'Childern', 'Technology', 'Business', 'Personal development']);

                    setStats({
                        titles: `${totalTitles}+`,
                        topics: `${uniqueTopics.size}+`
                    });
                }
            } catch (error) {
                setStats({ titles: '16+', topics: '11+' });
            }
        };
        fetchBooks();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/books?search=${encodeURIComponent(query.trim())}`);
        } else {
            navigate('/books');
        }
    };
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content fade-in">
                    <h1 className="hero-title">
                        <span className="accent">Mindful</span> <br />
                        Reading Experience
                    </h1>
                    <p className="hero-description">
                        A curated journey of ideas that expands perspective and fuels personal growth. Explore transformative content designed to challenge thinking and awaken the modern mind.
                    </p>

                    <a href="#explore" className="explore-link">Explore</a>

                    <form className="search-container" onSubmit={handleSearch}>
                        <div className="search-input-wrapper">
                            <FiSearch className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search authors, titles, or concepts..."
                                className="search-input"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="search-btn">
                            <FiSearch />
                        </button>
                    </form>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">{stats.titles}</span>
                            <span className="stat-label">Titles</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Readers</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">{stats.topics}</span>
                            <span className="stat-label">Topics</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual scale-in">
                    <div className="visual-background"></div>
                    <img src="/hero-visual.png" alt="Book reading experience" className="hero-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
