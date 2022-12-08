import  ReactDOM  from 'react-dom'
import {FaTimes} from 'react-icons/fa'
import React, { Component } from 'react'

// CSS
import './PopupModal.css'



export default class PopupModal extends Component {
  render(props) {
    
    return ReactDOM.createPortal (
    <>
    <div className="popup-overlay">
    <div className='popup-conteiner'>
        <h4 className='popup-title'>{this.props.title}</h4>
        <img className='popup-icon' src={this.props.image} alt="/" />
        <p className='popup-text'>{this.props.text}</p>
        <button className='popup-close' type='button' onClick={this.props.hide}><FaTimes/></button>
    </div>
    </div>
    </>,
    document.getElementById('portal')
    )
  }
}
