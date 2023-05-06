import React, { useState } from "react";
import "../Styles/Register.scss";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Axios from "axios";

const Register = () => {  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [createError, setCreateError] = useState(false);
    const [passMatch, setPassMatch] = useState(true);

    const handleRegister = () => {
        // check if both passwords match
        if(password != valid){
            // display error statement
            setRegisterSuccess(false);
            setCreateError(false);
            setPassMatch(false);
            // clear input fields
            setPassword('');
            setValid('');
        } else {
            Axios.post("http://localhost:4000/auth/Register", {
            email: email,
            password: password,
            }).then(response => {
                console.log(response.data);
                // display success statement
                setRegisterSuccess(true);
                setCreateError(false);
                setPassMatch(true);
                // clear input fields
                setEmail('');
                setPassword('');
                setValid('');
            }).catch(error => {
                console.error(error);
                // display error statement
                setRegisterSuccess(false);
                setCreateError(true);
                setPassMatch(true);
                // clear input fields
                setPassword('');
                setValid('');
            })
        }
        
    }

  return (
    <div className="Register">
      <Navbar/>
      <div className="Wrapper">
        <div className="Container">
            <label className="LoginLabel">Sign Up</label>

            <input 
            className="Input" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}>
            </input>

            <input 
            className="Input" 
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}>
            </input>

            <input 
            className="Input" 
            type="password"
            placeholder="Re-enter Password"
            value={valid}
            onChange={(e) => setValid(e.target.value)}>
            </input>

            {registerSuccess ? <p className="Success">Account created!</p> : <p></p>}
            {createError ? <p p className="Error">Error. not created</p> : <p></p>}
            {passMatch ? <p></p> : <p className="Error">Error. Passwords do not match.</p>}

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
    </div>
  );
};

export default Register;

