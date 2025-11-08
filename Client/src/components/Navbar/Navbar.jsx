import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="out">
            <nav className="navbar">
            <div className="nav-logo">MyApp</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/about">Feedback details</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <div className="nav-login">
                <Link to="/login" className="login-btn">Login</Link>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;
