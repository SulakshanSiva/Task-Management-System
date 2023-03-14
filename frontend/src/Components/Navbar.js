import React from 'react';
import "../Styles/Navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <nav class="navbar">
                <ul class="main-nav" id="js-menu">
                    <li>
                        <a href="#" class="nav-links">Home</a>
                    </li>
                    <li>
                        <a href="#" class="nav-links">Products</a>
                    </li>
                    <li>
                        <a href="#" class="nav-links">About Us</a>
                    </li>
                    <li>
                        <a href="#" class="nav-links">Contact Us</a>
                    </li>
                    <li>
                        <a href="#" class="nav-links">Blog</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;