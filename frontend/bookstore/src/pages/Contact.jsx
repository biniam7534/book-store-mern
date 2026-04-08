import React from 'react';
import { FiMapPin, FiMail, FiPhone, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="contact-header section-padding">
                <div className="container">
                    <h1 className="contact-title fade-in">Contact Us</h1>
                    <p className="contact-subtitle fade-in">Have questions or feedback? We'd love to hear from you.</p>
                </div>
            </section>

            <section className="contact-content container">
                <div className="contact-grid">
                    {/* Left Column: Contact info */}
                    <div className="contact-info-card fade-in">
                        <h2 className="info-card-title">Contact Information</h2>

                        <div className="info-item">
                            <div className="info-icon-wrapper">
                                <FiMapPin />
                            </div>
                            <div className="info-text">
                                <h3>Our Location</h3>
                                <p>123 Book Street, Library City, Addis Ababa, Ethiopia</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon-wrapper">
                                <FiMail />
                            </div>
                            <div className="info-text">
                                <h3>Email Us</h3>
                                <p>biniamabuu75@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon-wrapper">
                                <FiPhone />
                            </div>
                            <div className="info-text">
                                <h3>Call Us</h3>
                                <p>+251 975346904</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="contact-form-card fade-in">
                        <h2 className="form-card-title">Send us a message via WhatsApp</h2>

                        <form className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Name*</label>
                                    <div className="input-wrapper">
                                        <FiUser className="input-icon" />
                                        <input type="text" placeholder="       Your Name" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email*</label>
                                    <div className="input-wrapper">
                                        <FiMail className="input-icon" />
                                        <input type="email" placeholder="       Your Email" required />
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Phone (optional)</label>
                                    <div className="input-wrapper">
                                        <FiPhone className="input-icon" />
                                        <input type="tel" placeholder="       Your Phone" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Subject (optional)</label>
                                    <div className="input-wrapper">
                                        <input type="text" placeholder="Subject" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Message *</label>
                                <div className="input-wrapper textarea-wrapper">
                                    <FiMessageSquare className="input-icon" />
                                    <textarea placeholder="Tell us more about your inquiry..." required></textarea>
                                </div>
                            </div>

                            <button type="submit" className="submit-btn">
                                <FiSend /> Send via WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
