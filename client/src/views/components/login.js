import React from "react";
import "./styles/login.css";
import {Link} from "react-router-dom"

const Login = (props) => {
        return(
            <div className="login-container">
                <h2>INICIAR SESIÓN</h2>
                <form className="login-form">      
                    <input className="login-email" type="text"  name="email" placeholder="Correo" ></input>

                    <input className="login-password" type="text"  name="password" placeholder="Contraseña" ></input>
                    
                    <Link to="/options">
                        <button className="login-btn">Ingresar</button>
                    </Link>
                    
                    <Link to="/recover" className="login-p">
                        Se me olvidó la contraseña
                    </Link>
                </form>
            </div>
        )
}

export default Login;