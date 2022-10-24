import React from 'react'

// CSS
import './About.css'

function About() {
  return (
    <section name='about' className='about'>
        <div className='about-content'>
            <h4 className='text-4xl'>About</h4>
            <div className='about-text'>
                <p className='about-text-intro'>Hi. I'm Jurgis, nice to meet you. Please take a look around.</p>
                <p>I'am pasionate about building axcellent software that improves the live of those around me. I specialize in creating software for clients ranging from individuals and small-businesse all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?</p>
            </div>
        </div>
    </section>
  )
}

export default About