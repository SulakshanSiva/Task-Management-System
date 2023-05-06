import React from 'react';
import "../Styles/Navbar.scss";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav className="Nav">

                <div className="Title">
                    <h4>Plan</h4><h4 className='SecondWord'>Simple</h4>
                </div>
                
                <ul>
                    <div className="NavElements">
                        <li>
                            <a>
                                <Link to="/">Home</Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/About">About</Link>
                            </a>
                        </li>
                        <li>
                            <Link to="/Contact">Contact Us</Link>
                        </li>
                        <li>
                            <a>
                                <Link to="/Login">Log In</Link>
                            </a>
                        </li>
                    </div>    
                </ul>

            </nav>
        </div>
    )
}

export default Navbar;