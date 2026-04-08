import React, { useState } from 'react';
import { FiMapPin, FiMail, FiPhone, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi';
import axios from 'axios';
import API_BASE_URL from '../api';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // 1. Save to database
            await axios.post(`${API_BASE_URL}/api/contacts`, formData);

            // 2. Prepare WhatsApp message
            const targetPhoneNumber = "251975346904";
            const text = `*New Contact Inquiry from BookShell*%0A%0A` +
                `*Name:* ${formData.name}%0A` +
                `*Email:* ${formData.email}%0A` +
                `*Phone:* ${formData.phone || 'N/A'}%0A` +
                `*Subject:* ${formData.subject || 'General Inquiry'}%0A%0A` +
                `*Message:*%0A${formData.message}`;

            // 3. Open WhatsApp
            window.open(`https://wa.me/${targetPhoneNumber}?text=${text}`, '_blank');

            // 4. Clear form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

            alert("Message sent successfully!");
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again.");
        }
    };

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

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Name*</label>
                                    <div className="input-wrapper">
                                        <FiUser className="input-icon" />
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email*</label>
                                    <div className="input-wrapper">
                                        <FiMail className="input-icon" />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Phone (optional)</label>
                                    <div className="input-wrapper">
                                        <FiPhone className="input-icon" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Your Phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Subject (optional)</label>
                                    <div className="input-wrapper">
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Message *</label>
                                <div className="input-wrapper textarea-wrapper">
                                    <FiMessageSquare className="input-icon" />
                                    <textarea
                                        name="message"
                                        placeholder="Tell us more about your inquiry..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <button type="submit" className="submit-btn" style={{ cursor: 'pointer' }}>
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
