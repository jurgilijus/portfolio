import React from 'react'

// CSS
import './Contact.css'

function Contact() {
  return (
    <section name='contact' className='contact'>
        <form action="">
            <div className='contact-text'>
                <h4>Contact</h4>
                <p>Submit the form below or shoot me an email - jurgissubciusgmail.com</p>
            </div>
            <div className='contact-form'>
            <input className='contact-form-inputs' type="text" placeholder='Enter your name' name='name'/><br />
            <input className='contact-form-inputs' type="email" placeholder='Enter your email' name='email'/><br />
            <textarea className='contact-form-inputs' placeholder='Enter your text' name='message' rows="10"/><br />
            <button className='btn btn-aligne'> Contact me!!!</button>
            </div>
        </form>
    </section>
  )
}

export default Contact