import React from "react";
import "./styles/recoverpass.css";

const Recover = (props) => {
    return(
        <div className="recover-container">
            <h2>Recuperar Contraseña</h2>

            <input className="recover-pass" type="text" name="recover" placeholder="Contraseña" />

            <button onClick={props.recoverPass} className="recover-btn">Solicitar recuperación</button>
        </div>
    )
}

export default Recover;