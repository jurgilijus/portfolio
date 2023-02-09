import ReactDOM from "react-dom";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

// CSS
import "./WorkPopupModal.css";

function WorkPopupModal(props) {
  const { image, hide, iconI, iconII, hrefDemo, hrefCode } = props;
  const [mainImage, setMainImage] = useState(image);
  const handleImageChange = (e) => {
    setMainImage(e);
  };

  return ReactDOM.createPortal(
    <>
      <div className="workpopup-overlay">
        <div className="workpopup-conteiner">
          <button className="workpopup-close" type="button" onClick={hide}>
            <FaTimes />
          </button>
          <img className="worlpupup-main-img" src={mainImage} alt="" />
          <div className="img-conteiner">
            <li className="workpopup-imgs">
              <ul onClick={() => handleImageChange(image)}>
                <img
                  src={image}
                  className={!image ? "empty" : " workpopup-img"}
                  alt=""
                />
              </ul>
              <ul onClick={() => handleImageChange(iconI)}>
                <img
                  className={!iconI ? "empty" : " workpopup-img"}
                  src={iconI}
                  alt=""
                />
              </ul>
              <ul onClick={() => handleImageChange(iconII)}>
                <img
                  src={iconII}
                  className={!iconII ? "empty" : " workpopup-img"}
                  alt=""
                />
              </ul>
            </li>
          </div>
          <div className="workpopup-btns">
            <a href={hrefDemo} target="_blank" rel="noreferrer">
              <button className="btn">Demo</button>
            </a>
            <a href={hrefCode} target="_blank" rel="noreferrer">
              <button className="btn">Code</button>
            </a>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default WorkPopupModal;
