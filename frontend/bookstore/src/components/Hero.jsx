import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
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

                    <div className="search-container">
                        <div className="search-input-wrapper">
                            <FiSearch className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search authors, titles, or concepts..."
                                className="search-input"
                            />
                        </div>
                        <button className="search-btn">
                            <FiSearch />
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">0+</span>
                            <span className="stat-label">Titles</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">0+</span>
                            <span className="stat-label">Readers</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">0+</span>
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
