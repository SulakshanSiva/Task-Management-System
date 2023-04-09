import React, { useState } from "react";
import "../Styles/Register.scss";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Axios from "axios";

const Register = () => {  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState('');

    const handleRegister = () => (
        Axios.post("http://localhost:4000/Register", {
            email: email,
            password: password,
            valid: valid,
        })
    )

  return (
    <div className="Register">
      <Navbar></Navbar>
      <div className="Container">
        <label className="LoginLabel">Sign Up</label>

        <input 
        className="Input" 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}>
        </input>

        <input 
        className="Input" 
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}>
        </input>

        <input 
        className="Input" 
        type="password"
        placeholder="Re-enter Password"
        onChange={(e) => setValid(e.target.value)}>
        </input>

        <button className="Button" onClick={handleRegister}>
          Sign up
        </button>
        <label className="CreateAccLabel">Already have an account?</label>


        <div className="SignUpLabel">
          <a href="">
            <Link to="/Login">Login</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;

