import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Landing.scss";
import "../Components/Navbar"
import Navbar from "../Components/Navbar"

const Error404 = () => {
    return (
        <div className="Landing">
            <div>

            <Navbar/>
        

            <section className="hero">
                <h1><h4>404</h4><h4 className='SecondWord'> Error</h4></h1>
                <p>Web page does not exist.</p>
            </section>        

            <section className="features">

            </section>
        

            <footer>

            </footer>
            </div>
        </div>
      );
}

export default Error404