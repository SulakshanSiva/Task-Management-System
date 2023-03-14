import React, { useState, useEffect } from "react";
import "../Styles/Register.scss";

const Login = () => {
  useState(() => {});

  return (
    <div className="Register">
      <div className="Container">

        <h1>Login</h1>

        <input placeholder="Email"></input>

        <input placeholder="Password"></input>

        <a href="" className="Labels">Forgot your password?</a>
        <a href="" className="Labels">Create account</a>

        <button className="Button" onClick="">Sign in</button>
      </div>
    </div>
  );
};

export default Login;
