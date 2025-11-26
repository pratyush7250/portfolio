import React from 'react'
import "./Hero.css"
import photo from '../../assets/photo.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import pdf from '../../assets/Resume.pdf'

const Hero = () => {
    return (
        <div id='home' className="hero">
            <img src={photo} alt="" />
            <h1><span>I'm Pratyush Mohanty,</span>  frontend developer based in India.</h1>
            <p>I am a frontend developer from Odisha, India with 1 year Experiance</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        Connect with me
                    </AnchorLink>
                </div>
                <a href={pdf} download="Pratyush-Mohanty-Resume.pdf">
                    <div className="hero-resume">
                        <span class="material-icons">download</span>
                        My Resume
                    </div>
                </a>
            </div>
        </div >
    )
}

export default Hero
