import axios from 'axios';
import { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/contact', formData);

      if (res.status === 200) {
        setNotification('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });

        // Hide the notification after 2 seconds
        setTimeout(() => setNotification(''), 2000);
      }
    } catch (err) {
      console.error(err);
      setNotification(err.response?.data?.message || 'Failed to submit form');
      setTimeout(() => setNotification(''), 3000);
    }
  };

  return (
    <div className="contact-container">
      {/* Notification Popup */}
      {notification && (
        <div className="notification-popup">
          {notification}
        </div>
      )}

      <div className="contact-card">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you! Fill out the form and we'll get back to you shortly.</p>
          <div className="contact-details">
            <div>
              <span className="icon">📧</span>
              contact@example.com
            </div>
            <div>
              <span className="icon">📞</span>
              +1 (234) 567-890
            </div>
            <div>
              <span className="icon">📍</span>
              123 Business Street, City, Country
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Mobile Number"
                required
              />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter Subject"
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              />
            </div>
            <button onClick={handleSubmit} className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
