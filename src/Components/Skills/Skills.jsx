import React, {useEffect} from 'react'
import {skillsItems} from './SkillsItems'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

// CSS
import './Skills.css'

const showVariant = {
  initial: { opacity: 1, transition: { duration: 1 } },
  animate: { opacity: 0 }
}

function Skills() {
  
  const control = useAnimation()
  const [ref, inView] = useInView(false)
  
  useEffect(() => {
    if (inView) {
      control.start("initial");
    } else {
      control.start("animate");
    }
  }, [control, inView]);
  
  return (
    <section name='skills' className='skills'>
        
      <h4>Skills</h4>
      <p>These are the technologies I've worked with</p>
        
      <div className='skills-items'>
        {skillsItems.map((skillsItem) =>
          <motion.div ref={ref}
                      variants={showVariant}
                      initial="hidden"
                      animate={control} key={skillsItem.id} className='skills-item'>
            <img src={skillsItem.image} alt={skillsItem.alt} className='skills-icon' loading='lazy'/>
            <p className='skills-text'>{skillsItem.title}</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Skills