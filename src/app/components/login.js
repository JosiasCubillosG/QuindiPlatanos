import React from "react";
import "./styles/login.css";

const Login = (props) => {
        return(
            <div className="login-container">
                <h2>INICIAR SESIÓN</h2>
                <form className="login-form">      
                    <input className="login-email" type="text"  name="email" placeholder="Correo" ></input>

                    <input className="login-password" type="text"  name="password" placeholder="Contraseña" ></input>
                   
                    <button className="login-btn">Ingresar</button>

                    <button onClick={props.handleClick} className="login-p" >Se me olvidó la contraseña</button>
                </form>
            </div>
        )
}

export default Login;