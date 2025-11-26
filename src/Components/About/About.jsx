import React from 'react'
import './About.css'
import fullPhoto from '../../assets/fullPhoto.jpg'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={fullPhoto} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Frontend Developer with over a decade of expertise in creating responsive and user-friendly web applications.</p>
                        <p>My passion for frontend development is not only reflected in my code but also in my commitment to delivering exceptional user experiences.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: '85%' }} />
                        </div>
                        <div className="about-skill">
                            <p>React Js</p>
                            <hr style={{ width: '65%' }} />
                        </div>
                        <div className="about-skill">
                            <p>Angular</p>
                            <hr style={{ width: '75%' }} />
                        </div>
                        <div className="about-skill">
                            <p>Node Js</p>
                            <hr style={{ width: '55%' }} />
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>1</h1>
                        <p>YEAR OF EXPERIENCE</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>5+</h1>
                        <p>PROJECTS COMPLETED</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>20+</h1>
                        <p>CONNECTIONS</p>
                    </div>
                </div>
        </div>
    )
}

export default About
