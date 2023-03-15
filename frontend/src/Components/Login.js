import React, { useState, useEffect } from "react";
import "../Styles/Register.scss";
import Navbar from "./Navbar";

const Login = () => {
  useState(() => {});

  return (
    <div className="Register">
      <Navbar></Navbar>
      <div className="Container">

        <label className="LoginLabel">Login</label>

        <input className="Input" placeholder="Email"></input>

        <input className = "Input" placeholder="Password"></input>

        <a href="" className="ForgotPassLabel">Forgot your password?</a>
        <button className="Button" onClick="">Sign in</button>
        <a href="" className="CreateAccLabel">Create account</a>
      </div>
    </div>
  );
};

export default Login;
