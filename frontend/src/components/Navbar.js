import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Climate Change Nonprofit</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/about">Our Mission</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
