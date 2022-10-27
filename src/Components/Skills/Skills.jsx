import React from 'react'
import {skillsItems} from './SkillsItems'

// CSS
import './Skills.css'
function Skills() {
  return (
    <section name='skills' className='skills'>
        
            <h4>Skills</h4>
            <p>These are the technologies I've worked with</p>
        
        <div className='skills-items'>
            {skillsItems.map((skillsItem) =>
             <div key={skillsItem.id} className='skills-item'>
                <img src={skillsItem.image} alt={skillsItem.alt} className='skills-icon'/>
                <p className='skills-text'>{skillsItem.title}</p>
            </div>
            )}
        </div>
    </section>
  )
}

export default Skills