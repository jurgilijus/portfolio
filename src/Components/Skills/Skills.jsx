import React from 'react'
import html5 from '../../Assets/html5.png'
import css from '../../Assets/css3.png'
import bootstrap from '../../Assets/Bootstrap_logo.svg.png'
import firebase from '../../Assets/firebase.png'
import github from '../../Assets/github.png'
import javascript from '../../Assets/javascript.png'
import reactjs from '../../Assets/React-icon.svg.png'
import tailwindcss from '../../Assets/Tailwind_CSS_Logo.svg.png'

// CSS
import './Skills.css'
function Skills() {
  return (
    <section name='skills' className='skills'>
        
            <h4 className='skills-header'>Skills</h4>
            <p>These are the technologies I've worked with</p>
        
        <div className='skills-items'>
            <div className='skills-item'>
                <img src={html5} alt="HTML icon" className='skills-icon'/>
                <p className='skills-text'>HTML</p>
            </div>
            <div className='skills-item'>
                <img src={css} alt="HTML icon" className='skills-icon'/>
                <p className='skills-text'>HTML</p>
            </div>
            <div className='skills-item'>
                <img src={bootstrap} alt="HTML icon" className='skills-icon'/>
                <p className='skills-text'>HTML</p>
            </div>
            <div className='skills-item'>
                <img src={firebase} alt="HTML icon" className='skills-icon'/>
                <p className='skills-text'>HTML</p>
            </div>
            <div className='skills-item'>
                <img src={github} alt="HTML icon" className='skills-icon'/>
                <p className='skills-text'>HTML</p>
            </div>
            <div className='skills-item'>
                <img src={javascript} alt="HTML icon" className='skills-icon'/>
                <p className='skills-text'>HTML</p>
            </div>
            <div className='skills-item'>
                <img src={reactjs} alt="HTML icon" className='skills-icon'/>
                <p className='skills-text'>HTML</p>
            </div>
            <div className='skills-item'>
                <img src={tailwindcss} alt="HTML icon" className='skills-icon'/>
                <p className='skills-text'>HTML</p>
            </div>
        </div>
    </section>
  )
}

export default Skills