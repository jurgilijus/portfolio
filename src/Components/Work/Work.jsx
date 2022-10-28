import React, {useEffect} from 'react'
import { workItems } from './WorkItems'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

// CSS
import './Work.css'

const showVariant = {
  initial: { opacity: 1, transition: { duration: 1 } },
  animate: { opacity: 0 }
}

function Work() {
    
    const control = useAnimation()
    const [ref, inView] = useInView(false)
    
    useEffect(() => {
        inView ? control.start("initial") : control.start("animate")
    }, [control, inView]);
    
  return (
    <section name='work' className='work'>
        <h4>Work</h4>
        <p className='work-p'>Check out some of my recent work</p>
        <motion.div ref={ref}
                variants={showVariant}
                initial="hidden"
                animate={control} className='work-items'>
        {workItems.map((workItem) =>
        
            <div key={workItem.id} className='work-conteiner'>
                <img className='work-image' src={workItem.image} alt={workItem.alt} loading='lazy'/>
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
        </motion.div>  
    </section>
  )
}

export default Work