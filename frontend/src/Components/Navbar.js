import React from 'react';
import "../Styles/Navbar.scss";

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav className="Nav">

                <div className="Title">
                    <h4>Title</h4>
                </div>
                
                <ul>
                    <div className="NavElements">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Log In</a></li>
                    </div>    
                </ul>

            </nav>
        </div>
    )
}

export default Navbar;