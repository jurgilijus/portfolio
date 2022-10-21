import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../Assets/64-64 white.net.png'

// CSS
import "./Navbar.css"

function Navbar() {
  return (
    <nav className='navbar'>
        <div>
            <img className='logo' src={Logo} alt="Logo image" />
        </div>
        
        {/* Menu */}
        <div >
            <ul className='menu-list'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
        
        {/* Hamburger */}
        <div className='hambureer-btn'>
            <FaBars/>
        </div>
        {/* Mobile menu */}
        <ul className='menu-mobile'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
        {/* Social icons */}
        <div></div>
    </nav>
  )
}

export default Navbar