import React, { useContext } from 'react';
import Axios from "axios";
import Navbar from './Navbar';
import "../Styles/Home.scss";
import "../Styles/Navbar.scss";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const Home = () => {
    const { currentUser, endSession } = useContext(AuthContext);

    const navigate = useNavigate();

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

  return (
    <div className='Home'> 

        <Navbar/>

        <button onClick={handleLogOut}>Log Out</button>
        <div className="Container">
            <div className="Col">
            </div>

            <div className="Col">
            </div>

            <div className="Col">
            </div>
        </div>

    </div>
  )
}

export default Home;