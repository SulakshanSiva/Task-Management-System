import React from 'react';
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
                <h1>Welcome to our Website</h1>
                <p>Planning made simple.</p>
                <button>Get Started</button>
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