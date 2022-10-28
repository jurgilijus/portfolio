import React from 'react'
import {useState, useEffect} from 'react'
import {MdKeyboardArrowUp} from 'react-icons/md'

// CSS
import './ScrollToTop.css'

function ScrollToTop() {
    
    const [isVisable, setIsVisibale] = useState(false)
    
    const toggleVisibility = () => {
      window.pageYOffset > 300 ? setIsVisibale(true) : setIsVisibale(false)
    }
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior:'smooth'
      })  
    }
    
    useEffect(() =>{
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
    }},[])
    
  return (
    <div className='toTop-playsment'>
        <button type='button' onClick={scrollToTop} className={isVisable ? 'opacity-100' : 'opacity-0'}><MdKeyboardArrowUp/></button>
    </div>
  )
}

export default ScrollToTop