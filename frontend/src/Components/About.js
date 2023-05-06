import React from 'react'
import Navbar from './Navbar'
import "../Styles/About.scss"
import gitProfile from "../Assets/Images/icons8-github.svg"
import linkedln from "../Assets/Images/icons8-linkedin.svg"

const About = () => {
  return (
    <div className="About">
        <Navbar/>
        <div className="Container">

            <div className="RowOne Row">

                <div className="Card">

                    <div className="Info">
                            
                        <a href="https://github.com/rnguyen03" target="_blank">
                            <img width="50" height="50" src={gitProfile} alt="Github" />    
                        </a>   

                        <a href="https://www.linkedin.com/in/ryannguyenuog/" target="_blank">
                            <img width="50" height="50" src={linkedln} alt="Linkedln"/>
                        </a>
                            
                    </div>

                    <div className="Content">

                        <div>
                            <div className="AboutMe">

                                <div className="Header">
                                    <div className="FirstName">
                                        <h3>Ryan</h3>
                                    </div>

                                    <div className="LastName">
                                        <h3>Nguyen</h3>
                                    </div>
                                </div>
                                    
                                <p>My name is Ryan Nguyen and I am a second year student currently attending the University of Guelph. Currently majoring in Software Engineering, my field of interests include, but are not limited to cloud architecture, statistics, machine learning, software development and implementation of the Java Collections Framework.</p>
                            </div>
                                
                            </div>
                    </div>
                    
                </div>

            </div>
            <div className="RowTwo Row">
                
                <div className="Card">

                <div className="Info">
                        
                        <a href="https://github.com/uzrafi" target="_blank">
                            <img width="50" height="50" src={gitProfile} alt="Github" />    
                        </a>   

                        <a href="https://www.linkedin.com/in/uzairrafi/" target="_blank">
                            <img width="50" height="50" src={linkedln} alt="Linkedln"/>
                        </a>
                        
                    </div>

                    <div className="Content">

                    <div>
                        <div className="AboutMe">

                            <div className="Header">
                                <div className="FirstName">
                                    <h3>Uzair</h3>
                                </div>

                                <div className="LastName">
                                    <h3>Rafi</h3>
                                </div>
                            </div>
                                
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis, cupiditate deserunt beatae sint quis molestiae perspiciatis earum ut delectus expedita magnam provident unde repellendus eveniet, amet veniam iste fugit!</p>
                        </div>
                            
                        </div>
                    </div>

                </div>

                <div className="Card">

                    <div className="Info">
                        
                        <a href="https://github.com/SulakshanSiva" target="_blank">
                            <img width="50" height="50" src={gitProfile} alt="Github" />    
                        </a>   

                        <a href="https://www.linkedin.com/in/sulakshansiva/" target="_blank">
                            <img width="50" height="50" src={linkedln} alt="Linkedln"/>
                        </a>
                        
                    </div>

                    <div className="Content">

                    <div>
                        <div className="AboutMe">

                            <div className="Header">
                                <div className="FirstName">
                                    <h3>Sulakshan</h3>
                                </div>

                                <div className="LastName">
                                    <h3>Siva</h3>
                                </div>
                            </div>
                                
                            <p>My name is Sulakshan Sivakumaran and I am a second year student currently attending the University of Guelph. Currently majoring in Computer Science, I have a major passion for coding and am always looking to learn more in the realm of technology.</p>
                        </div>
                            
                        </div>
                    </div>
                        
                </div>
            </div>

        </div>
    </div>
  )
}

export default About