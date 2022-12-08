import ReactDOM from 'react-dom'
import React, {useState} from 'react'
import {FaTimes} from 'react-icons/fa'

// CSS
import './WorkPopupModal.css'

function WorkPopupModal(props) {
    const [mainImage, setMainImage] = useState(props.image)
    const handleImageChange = (e) => {
      setMainImage(e)
    }

    return ReactDOM.createPortal (
        <>
        <div className='workpopup-overlay'>
        <div className='workpopup-conteiner'>
            <button className='workpopup-close' type='button' onClick={props.hide}><FaTimes/></button>
            <img className='worlpupup-main-img' src={mainImage} alt="" />
            <div >
              <li className="workpopup-imgs">
                <ul onClick={()=>handleImageChange(props.image)}><img className='workpopup-img' src={props.image} alt="" /></ul>
                <ul onClick={()=>handleImageChange(props.iconI)}><img className='workpopup-img' src={props.iconI} alt="" /></ul>
                <ul onClick={()=>handleImageChange(props.iconII)}><img className='workpopup-img' src={props.iconII} alt="" /></ul>
              </li>
            </div>
            <div className="workpopup-btn">
              <a href='/' target="_blank" rel="noreferrer">
                  <button className='btn'>
                    Demo
                  </button>
              </a>
              <a href='/' target="_blank" rel="noreferrer">
                  <button className='btn'>
                    Code
                  </button>
              </a>
            </div>
        </div>
        </div>
        </>,
        document.getElementById('portal')
    )
}

export default WorkPopupModal



