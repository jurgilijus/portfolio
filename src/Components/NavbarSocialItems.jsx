import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Resume from '../Assets/cv.pdf' 

// CSS
import "./Navbar.css"

export const navbarSocialItems = [
   {id: 1, 
    className: 'social-icon', 
    href: 'https://www.linkedin.com/in/jurgis-suba%25C4%258Dius-5527056a/',
    title: 'Linkedin', 
    icon:<FaLinkedin className='icon-size'/>
},
{
    id: 2, 
    className:'social-icon git-color',
    href: 'https://github.com/jurgilijus/portfolio.git',
    title: 'GitHub',
    icon: <FaGithub className='icon-size'/>
},
{
    id: 3, 
    className:'social-icon res-color',
    href: [Resume],
    title: 'Resume',
    icon: <BsFillPersonLinesFill className='icon-size'/>
} 
]