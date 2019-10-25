import React from "react";
import "./styles/modalPass.css";

const ModalPass = (props) => {
    return(
        <div className="modalPass">
            <h1>Su nueva contraseña será enviada por WhatsApp</h1>
            <button  
                onClick={props.handleClick} 
                className="modalPass-close"
            />
        </div>
    )
}

export default ModalPass;