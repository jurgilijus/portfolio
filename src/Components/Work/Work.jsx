import React from 'react'
import image from '../../Assets/pexels-tranmautritam-251225.jpg'

// CSS
import './Work.css'

function Work() {
  return (
    <section name='work' className='work'>
        <h4>Work</h4>
        <p>Check out some of my recent work</p>
        <div className='work-items'>
            <div className='work-conteiner'>
                <input type="image" className='work-image' src={image} alt="ko nerodai blt?" />
                    <div className='overlay'>
                        
                        <div className='text'>
                            <span>React JS Application</span>
                            <div className='work-btn-location'>
                            <a href="/">
                                <button className='btn'>
                                        Demo
                                </button>
                            </a>
                            <a href="/">
                                <button className='btn'>
                                        Code
                                </button>
                            </a>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='work-conteiner'>
                <input type="image" className='work-image' src={image} alt="ko nerodai blt?" />
                    <div className='overlay'>
                        
                        <div className='text'>
                            <span>React JS Application</span>
                            <div className='work-btn-location'>
                            <a href="/">
                                <button className='btn'>
                                        Demo
                                </button>
                            </a>
                            <a href="/">
                                <button className='btn'>
                                        Code
                                </button>
                            </a>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='work-conteiner'>
                <input type="image" className='work-image' src={image} alt="ko nerodai blt?" />
                    <div className='overlay'>
                        
                        <div className='text'>
                            <span>React JS Application</span>
                            <div className='work-btn-location'>
                            <a href="/">
                                <button className='btn'>
                                        Demo
                                </button>
                            </a>
                            <a href="/">
                                <button className='btn'>
                                        Code
                                </button>
                            </a>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='work-conteiner'>
            <input type="image" className='work-image' src={image} alt="ko nerodai blt?" />
                <div className='overlay'>
                    
                    <div className='text'>
                        <span>React JS Application</span>
                        <div className='work-btn-location'>
                        <a href="/">
                            <button className='btn'>
                                    Demo
                            </button>
                        </a>
                        <a href="/">
                            <button className='btn'>
                                    Code
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
        </div>
        <div className='work-conteiner'>
            <input type="image" className='work-image' src={image} alt="ko nerodai blt?" />
                <div className='overlay'>
                    
                    <div className='text'>
                        <span>React JS Application</span>
                        <div className='work-btn-location'>
                        <a href="/">
                            <button className='btn'>
                                    Demo
                            </button>
                        </a>
                        <a href="/">
                            <button className='btn'>
                                    Code
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
        </div>
        <div className='work-conteiner'>
            <input type="image" className='work-image' src={image} alt="ko nerodai blt?" />
                <div className='overlay'>
                    
                    <div className='text'>
                        <span>React JS Application</span>
                        <div className='work-btn-location'>
                        <a href="/">
                            <button className='btn'>
                                    Demo
                            </button>
                        </a>
                        <a href="/">
                            <button className='btn'>
                                    Code
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    </section>
  )
}

export default Work