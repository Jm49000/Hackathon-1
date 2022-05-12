import React from "react";
import ReactDom from "react-dom";

const Modal = ({ isShowing, hide, city, PM10, PM25, OZONE, AQI, CO}) =>
isShowing
? ReactDom.createPortal(
    
    <div className="modal-overlay">
     <div className="flexprops">
         <h2 className="modal-city">{city}</h2>
         </div>   </div>
           
              
    
    
   
)
:null;


export default Modal;