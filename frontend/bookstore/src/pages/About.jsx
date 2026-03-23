import React from 'react';
import { FiAward, FiUsers, FiBookOpen, FiStar, FiTarget, FiEye, FiMapPin, FiClock } from 'react-icons/fi';
import './About.css';
import addisAbabaImg from '../assets/addis-ababa.jpg';
import adamaImg from '../assets/adama.jpg';
import mojoImg from '../assets/mojo.jpg';
import hawasaImg from '../assets/hawasa.jpg';


const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="container">
                    <h1 className="about-title fade-in">
                        Crafting Literary <br />
                        <span className="accent">Futures</span>
                    </h1>
                    <div className="divider fade-in"></div>
                    <p className="about-subtitle fade-in">
                        Pioneering the next chapter in global storytelling. We bridge imagination with <br />
                        innovation through curated literary experiences.
                    </p>
                </div>
            </section>

            <section className="about-stats section-padding">
                <div className="container stats-grid">
                    <div className="stat-card fade-in">
                        <div className="stat-icon-wrapper">
                            <FiAward className="stat-icon" />
                        </div>
                        <h2 className="stat-value">25K+</h2>
                        <p className="stat-name">Awards Won</p>
                    </div>
                    <div className="stat-card fade-in">
                        <div className="stat-icon-wrapper">
                            <FiUsers className="stat-icon" />
                        </div>
                        <h2 className="stat-value">1M+</h2>
                        <p className="stat-name">Active Readers</p>
                    </div>
                    <div className="stat-card fade-in">
                        <div className="stat-icon-wrapper">
                            <FiBookOpen className="stat-icon" />
                        </div>
                        <h2 className="stat-value">100K+</h2>
                        <p className="stat-name">Books Available</p>
                    </div>
                    <div className="stat-card fade-in">
                        <div className="stat-icon-wrapper">
                            <FiStar className="stat-icon" />
                        </div>
                        <h2 className="stat-value">4.9</h2>
                        <p className="stat-name">Average Rating</p>
                    </div>
                </div>
            </section>

            <section className="about-story section-padding">
                <div className="container story-grid">
                    <div className="story-image-container">
                        <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1000" alt="Bookstore" className="story-img" />
                        <div className="since-badge">
                            <h3>Since 2015</h3>
                            <p>Pioneering Digital Literature</p>
                        </div>
                    </div>
                    <div className="story-content">
                        <h2 className="story-title">Redefining Storytelling</h2>
                        <p className="story-desc">
                            We've transformed traditional publishing into a dynamic digital ecosystem...
                        </p>
                        <div className="mission-vision">
                            <div className="mv-card">
                                <div className="mv-icon"><FiEye /></div>
                                <div>
                                    <h3>Our Vision</h3>
                                    <p>Create a global network...</p>
                                </div>
                            </div>
                            <div className="mv-card">
                                <div className="mv-icon"><FiTarget /></div>
                                <div>
                                    <h3>Our Mission</h3>
                                    <p>Empower creators and inspire readers...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-sanctuaries section-padding">
                <div className="container">
                    <h2 className="sanctuaries-title">Our Literary Sanctuaries</h2>
                    <div className="team-divider"></div>
                    <div className="sanctuaries-grid">
                        <div className="sanctuary-card">
                            <div className="sanctuary-image">
                                <img src={addisAbabaImg} alt="Addis Ababa" />
                            </div>
                            <div className="sanctuary-info">
                                <h3><FiMapPin className="info-icon" /> Addis Ababa</h3>
                                <p><FiClock className="info-icon" /> 12PM - 1AM</p>
                            </div>
                        </div>
                        <div className="sanctuary-card">
                            <div className="sanctuary-image">
                                <img src={adamaImg} alt="adama" />
                            </div>
                            <div className="sanctuary-info">
                                <h3><FiMapPin className="info-icon" /> Adama</h3>
                                <p><FiClock className="info-icon" /> 12AM - 8PM</p>
                            </div>
                        </div>
                        <div className="sanctuary-card">
                            <div className="sanctuary-image">
                                <img src={mojoImg} alt="mojo" />
                            </div>
                            <div className="sanctuary-info">
                                <h3><FiMapPin className="info-icon" /> Mojo</h3>
                                <p><FiClock className="info-icon" /> 12AM - 11PM</p>
                            </div>
                        </div>
                        <div className="sanctuary-card">
                            <div className="sanctuary-image">
                                <img src={hawasaImg} alt="Hawasa" />
                            </div>
                            <div className="sanctuary-info">
                                <h3><FiMapPin className="info-icon" /> Hawasa</h3>
                                <p><FiClock className="info-icon" /> 1AM - 12PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
