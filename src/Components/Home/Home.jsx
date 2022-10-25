import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

// CSS
import './Home.css'

function Home() {
  return (
    <section name="home" className='home'>
        <div className='home-section'>
          <p className='introduction'>Hi, my name is</p>
          <h1>Jurgis Subačius</h1>
          <h2>I'm a front-end developer.</h2>
          <p>I'm front end developer specializing in building exceptional digital experiences. Currently, i'm focused on building responsive web applications.</p>
          <div>
            <Link to="work" smooth={true} duration={500}>
            <button className='btn' type='submit'>View work 
            <span className='arrow-efect'><HiArrowNarrowRight className='ml-3 text-2xl'/>
            </span>
            </button>
            </Link>
            
          </div>
        </div>
    </section>
  )
}

export default Home