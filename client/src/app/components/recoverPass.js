import React from "react";
import "./styles/recoverpass.css";
import {Link} from "react-router-dom"

const Recover = (props) => {
    return(
        <div className="recover-container">
            <h2>Recuperar Contraseña</h2>

            <input className="recover-pass" type="text" name="recover" placeholder="Correo" />

            <Link to="/">
                <button onClick={props.recoverPass} className="recover-btn">Solicitar recuperación</button>
            </Link>
        </div>
    )
}

export default Recover;