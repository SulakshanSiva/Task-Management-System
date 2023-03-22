import React, { useState } from "react";
import "../Styles/Register.scss";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="Register">
      <Navbar></Navbar>
      <div className="Container">
        <label className="LoginLabel">Login</label>

        <input 
        className="Input" 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}>
        </input>

        <input 
        className="Input" 
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}>
        </input>

        <a href="" className="ForgotPassLabel">
          Forgot your password?
        </a>
        <button className="Button" onClick="">
          Log in
        </button>
        <label className="CreateAccLabel">Don't have an account?</label>

        <div className="SignUpLabel">
          <a href="">
            <Link to="/Register">Sign up</Link>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Login;
