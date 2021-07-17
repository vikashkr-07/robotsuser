import React from 'react';
import './Popup.css'

const Popup = ({closePopup}) =>{
    return(
        <div className="popup-back">
            <div className="popop-content">
                <div className="close-popup" onClick={closePopup}>X</div>
                 <div className="content ">
                     <img src={`https://robohash.org/2`} alt="robo" className="bg-light-green br3 pa1 grow ma5 shadow-2"/>
                     <div className="text">
                         <h2>Vikash Kumar</h2>
                         <p>vikash810917@gmail.com</p>
                         <p>Mobile No: 9398634953</p>
                     </div>
                 </div>
            </div>
        </div>
    )
}
export default Popup;