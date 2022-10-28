import React, {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

// CSS
import './About.css'

const rightVariant = {
  initial: { x: "0rem", transition: { duration: 0.5 } },
  animate: { x: "-100%" }
}

const leftVariant = {
  initial: { x: "0rem", transition: { duration: 0.5 } },
  animate: { x: "100%" }
}

function About() {
  
  const control = useAnimation()
  const [ref, inView] = useInView(false)
  
  useEffect(() => {
    inView ? control.start("initial") : control.start("animate")
  }, [control, inView]);
  
  return (
    <section name='about' className='about'>
        <div className='about-content'>
            <h4 className='text-4xl'>About</h4>
            <div className='about-text'>
                <motion.p ref={ref}
                          variants={rightVariant}
                          initial="hidden"
                          animate={control} 
                          className='about-text-intro'>
                  Hi. I'm Jurgis, nice to meet you. Please take a look around.
                </motion.p>
                <motion.p ref={ref}
                          variants={leftVariant}
                          initial="hidden"
                          animate={control}>
                            I'am pasionate about building axcellent software that improves the live of those around me. I specialize in creating software for clients ranging from individuals and small-businesse all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
                </motion.p>
            </div>
        </div>
    </section>
  )
}

export default About