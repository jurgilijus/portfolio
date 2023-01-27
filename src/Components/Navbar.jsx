import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../Assets/64-64 white.net.png";
import { Link } from "react-scroll";
import { navbarItems } from "./NavbarItems";
import { navbarSocialItems } from "./NavbarSocialItems";

// CSS
import "./Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header className="navbar">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <input type="image" className="logo" src={Logo} alt="Logo image" />
        </Link>
      </div>

      {/* Menu */}
      <nav className="menu-list">
        {navbarItems.map((navbarItem) => (
          <div key={navbarItem.id} className="menu-list-hover">
            <Link to={navbarItem.to} smooth={true} duration={500}>
              {navbarItem.title}
            </Link>
          </div>
        ))}
      </nav>
      {/* Hamburger */}
      <div onClick={handleClick} className="hamburger-btn">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <nav className={!nav ? "hidden" : "menu-mobile"}>
        {navbarItems.map((navbarItem) => (
          <div key={navbarItem.id} className="menu-mobile-list">
            <Link
              onClick={handleClick}
              to={navbarItem.to}
              smooth={true}
              duration={500}
            >
              {navbarItem.title}
            </Link>
          </div>
        ))}
      </nav>
      {/* Social icons */}
      <div className="social-icons">
        {navbarSocialItems.map((navbarSocialItem) => (
          <ul key={navbarSocialItem.id} className={navbarSocialItem.className}>
            <li>
              <a
                className="social-icon-text"
                href={navbarSocialItem.href}
                target="_blank"
                rel="noreferrer"
              >
                {navbarSocialItem.title} {navbarSocialItem.icon}
              </a>
            </li>
          </ul>
        ))}
        <ul className="social-icon mail-color">
          <li>
            <Link
              className="social-icon-text"
              to="contact"
              smooth={true}
              duration={500}
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
