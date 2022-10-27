import React from 'react'
import { workItems } from './WorkItems'

// CSS
import './Work.css'

function Work() {
  return (
    <section name='work' className='work'>
        <h4>Work</h4>
        <p>Check out some of my recent work</p>
        <div className='work-items'>
        {workItems.map((workItem) =>
        
            <div key={workItem.id} className='work-conteiner'>
                <img className='work-image' src={workItem.image} alt={workItem.alt} />
                    <div className='overlay'>
                        
                        <div className='text'>
                            <span>{workItem.title}</span>
                            <div className='work-btn-location'>
                            <a href={workItem.hrefDemo}>
                                <button className='btn'>
                                        Demo
                                </button>
                            </a>
                            <a href={workItem.hrefCode}>
                                <button className='btn'>
                                        Code
                                </button>
                            </a>
                            </div>
                        </div>
                    </div>
            </div>
        )}
        </div>  
    </section>
  )
}

export default Work