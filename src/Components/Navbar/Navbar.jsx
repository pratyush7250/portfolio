import React, { useRef, useState } from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.svg'
import menu_open from '../../assets/menu_open.svg'
import nav_underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
    const [menu, setManu] = useState('home')
    const menuRef = useRef()
    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }
    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
            <ul ref={menuRef} className="nav-menu" >
                <img src={menu_close} alt="" className="nav-mob-close" onClick={closeMenu}/>
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setManu("home")}>Home</p></AnchorLink>{menu == 'home' ? <img src={nav_underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setManu("about")}>About Me</p></AnchorLink>{menu == 'about' ? <img src={nav_underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setManu("services")}>Services</p></AnchorLink>{menu == 'services' ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setManu("work")}>Projects</p></AnchorLink>{menu == 'work' ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setManu("contact")}>Contact</p></AnchorLink>{menu == 'contact' ? <img src={underline} alt='' /> : <></>}</li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        </div>
    )
}

export default Navbar
