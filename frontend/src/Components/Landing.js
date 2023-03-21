import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Landing.scss";
import "../Components/Navbar"
import Navbar from "../Components/Navbar"

const Landing = () => {
    return (
        <div className="Landing">
            <div>
            {/* Header Section */}
            <Navbar/>
        
            {/* Hero Section */}
            <section className="hero">
                <h1>Welcome to <h4>Plan</h4><h4 className='SecondWord'>Simple</h4></h1>
                <p>Planning made simple.</p>
                <Link to="/Login">
                    <button>Get Started</button>
                </Link>
            </section>
        
            {/* Features Section */}
            <section className="features">
                {/* Feature Cards */}
            </section>
        
            {/* Footer Section */}
            <footer>
                {/* Footer Links */}
            </footer>
            </div>
        </div>
      );
}

export default Landing