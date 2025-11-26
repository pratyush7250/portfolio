import React, { useRef, useState } from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.svg'
import menu_open from '../../assets/menu_open.svg'
import nav_underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
    const [menu, setMenu] = useState('home') // Fixed typo: setManu -> setMenu
    const menuRef = useRef()
    
    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }
    
    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
        closeMenu(); // Close mobile menu when item is clicked
    }

    return (
        <div className='navbar'>
            <img src={logo} alt="Logo" />
            <img src={menu_open} onClick={openMenu} alt="Open menu" className="nav-mob-open" />
            <ul ref={menuRef} className="nav-menu" >
                <img src={menu_close} alt="Close menu" className="nav-mob-close" onClick={closeMenu}/>
                <li>
                    <AnchorLink className='anchor-link' href='#home'>
                        <p onClick={() => handleMenuClick("home")}>Home</p>
                    </AnchorLink>
                    {menu === 'home' ? <img src={nav_underline} alt='' /> : <></>}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#about'>
                        <p onClick={() => handleMenuClick("about")}>About Me</p>
                    </AnchorLink>
                    {menu === 'about' ? <img src={nav_underline} alt='' /> : <></>}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#services'>
                        <p onClick={() => handleMenuClick("services")}>Services</p>
                    </AnchorLink>
                    {menu === 'services' ? <img src={nav_underline} alt='' /> : <></>} {/* Fixed: underline -> nav_underline */}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#work'>
                        <p onClick={() => handleMenuClick("work")}>Projects</p>
                    </AnchorLink>
                    {menu === 'work' ? <img src={nav_underline} alt='' /> : <></>} {/* Fixed: underline -> nav_underline */}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        <p onClick={() => handleMenuClick("contact")}>Contact</p>
                    </AnchorLink>
                    {menu === 'contact' ? <img src={nav_underline} alt='' /> : <></>} {/* Fixed: underline -> nav_underline */}
                </li>
            </ul>
            <div className="nav-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>
                    Connect With Me
                </AnchorLink>
            </div>
        </div>
    )
}

export default Navbar