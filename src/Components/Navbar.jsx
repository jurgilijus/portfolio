import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../Assets/64-64 white.net.png'

// CSS
import "./Navbar.css"

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
  return (
    <nav className='navbar'>
        <div>
            <input type="image" className='logo' src={Logo} alt="Logo image" />
        </div>
        
        {/* Menu */}
            <ul className='menu-list'>
                <li className='menu-list-hover'>Home</li>
                <li className='menu-list-hover'>About</li>
                <li className='menu-list-hover'>Skills</li>
                <li className='menu-list-hover'>Work</li>
                <li className='menu-list-hover'>Contact</li>
            </ul>
        
        {/* Hamburger */}
        <div onClick={handleClick} className='hamburger-btn'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'menu-mobile'}>
            <li className='menu-mobile-list'>Home</li>
            <li className='menu-mobile-list'>About</li>
            <li className='menu-mobile-list'>Skills</li>
            <li className='menu-mobile-list'>Work</li>
            <li className='menu-mobile-list'>Contact</li>
        </ul>
        {/* Social icons */}
        <div className='social-icons'>
            <ul className='social-icon'>
                <li><a className='social-icon-text' href="/">Linkedin <FaLinkedin size={30}/></a></li>
            </ul>
            <ul className='social-icon git-color'>
                <li><a className='social-icon-text' href="/">Github <FaGithub size={30}/></a></li>
            </ul>
            <ul className='social-icon git-color res-color'>
                <li><a className='social-icon-text' href="/">Resume <BsFillPersonLinesFill size={30}/></a></li>
            </ul><ul className='social-icon git-color mail-color'>
                <li><a className='social-icon-text' href="/">Email <HiOutlineMail size={30}/></a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar