import React, { useState, useRef} from 'react'
import Navbar from './Navbar'
import '../Styles/Contact.scss';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();  

    const clearInput = () => {
        setEmail("")
        setFirstName("")
        setLastName("")
        setMessage("")
    }

    const sendEmail = (e) => (

        e.preventDefault(),

        emailjs.sendForm('service_8roh7fg', 'template_zdhnrsa', form.current, 'hs7ZAD0KpvwyTzSGL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }),

        clearInput()
    )

  return (
    <div className='Contact'>
        <Navbar/>
        <div className="Wrapper">
            <div className="Container">
                <div className="Info">

                    <div className="Header">
                        <h1>Contact Us</h1>

                        <p>Our development team would love to hear from you!</p>
                    </div>
                    
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="NameContainer">
                            <div className="Name Left">
                                <label htmlFor="">First Name</label>
                                <input 
                                type="text" 
                                placeholder='First name'
                                name="first_name"
                                onChange={(e) => setFirstName(e.target.value)}
                                value={firstName}>
                                </input>
                            </div>

                            <div className="Name Right">
                                <label htmlFor="">Last Name</label>
                                <input type="text" 
                                placeholder='Last name'
                                name="last_name"
                                onChange={(e) => setLastName(e.target.value)}
                                value={lastName}
                                />
                            </div>  
                        </div>
                    
                    
                        <div className="Email">
                            <label htmlFor="">Email</label>
                            <input type="email" 
                            placeholder='Your@email.com'
                            name="user_email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            />
                        </div>

                        <div className="Message">
                            <label htmlFor="">Message</label>

                            <textarea
                            className='MsgBox'
                            onChange={(e) => setMessage(e.target.value)}
                            name="message"
                            value={message}
                            >
                            </textarea>
                        </div>

                        <button type="submit" value="Send" onClick={sendEmail}>Send Message</button>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact