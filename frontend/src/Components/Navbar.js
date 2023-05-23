import React, { useContext } from 'react';
import "../Styles/Navbar.scss";
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Navbar = () => {
    const navigate = useNavigate();

    const refreshPage = () => {
        navigate(0);
    }

    const { currentUser, endSession } = useContext(AuthContext);

    const handleLogOut = () => (
        Axios.delete("http://localhost:4000/auth/Logout", {
        }).then(response => {
            console.log(response.data);
            endSession(currentUser)
            navigate("/")
          })
          .catch(error => {
            console.error(error);
          })
    )

    const logInElement = 
    <a href="/#" onClick={refreshPage}>
        <Link to="/Login">Log In</Link>
    </a>

    const logOutElement = 
    <a href="/#" onClick={handleLogOut}>
        Log Out
    </a>

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
                            {currentUser ? logOutElement : logInElement}
                        </li>
                    </div>    
                </ul>

            </nav>
        </div>
    )
}

export default Navbar;