import React from 'react';
import "../Styles/Navbar.scss";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();

    const refreshPage = () => {
        navigate(0);
    }

    return (
        <div className="Navbar">
            <nav className="Nav">

                <div className="Title">
                    <h4>Plan</h4><h4 className='SecondWord'>Simple</h4>
                </div>
                
                <ul>
                    <div className="NavElements">
                        <li>
                            <a href="/#" onClick={refreshPage}>
                                <Link to="/">Home</Link>
                            </a>
                        </li>
                        <li>
                            <a href="/#" onClick={refreshPage}>
                                <Link to="/About">About</Link>
                            </a>
                        </li>
                        <li>
                            <a href="/#" onClick={refreshPage}>
                                <Link to="/Contact">Contact Us</Link>
                            </a>
                        </li>
                        <li>
                            <a href="/#" onClick={refreshPage}>
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