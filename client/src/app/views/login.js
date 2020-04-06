import React, {useEffect} from "react";
import "./styles/login.css";
import {Link, withRouter, Redirect} from "react-router-dom"
import ModalPassContainer from "./modalPassContainer";
import ModalPass from "../components/modalPass";
import Context from '../Context'

class Login extends React.Component {

    
    state = {
        modalPassword: false,
    }


    // handleInputChange = (e) => {
    //     const {name, value} = e.target;
    //     const a = e.target.name;
    //     this.setState({
    //         [name]: value,
    //     })
    // }

    // onSubmit = (e) => {
        // e.preventDefault();
        // Axios('/api/users/login',{
        //     method: 'POST',
        //     data: {...this.state}
        // })
        // .then(res => { 
        //     if(res.data.status === "success") {
        //         this.setState({
        //             isAuthenticated: true
        //         })
        //         console.log(this.state.isAuthenticated)
        //         this.props.history.push('/options')
        //     }else{
        //         const error = new Error(res.error)
        //         throw error
        //     }
        // })
        // .catch(err => {
        //     console.error(err)
        //     alert('Error iniciando sesión')
        // });
    // }


    recoverPass = (e) => {eact.Fragment>
        e.preventDefault();
        this.setState({
            modalPassword: true,
        })
    }

    closeModalPass = (e) => {eact.Fragment>
        e.preventDefault();
        this.setState({
            modalPassword: false,
        })
    }


    render(){
        return(
            <Context.Consumer >
                {
                    ({isAuth,email,password, changeEmail, changePassword, submit}) => {
                        return(
                            <div className="login-container">
                                <h2>INICIAR SESIÓN</h2>
                                <form className="login-form" onSubmit={submit}>      
                                    <input className="login-email" onChange={changeEmail}  value={email} type="email"  name="email" placeholder="Correo" required></input>
                    
                                    <input className="login-password" onChange={changePassword} value={password} type="password"  name="password" placeholder="Contraseña" required></input>
                                    
                                    
                                    <button type="submit" value="Submit" className="login-btn">Ingresar</button>
                                    
                                    <Link to="/recover" className="login-p">
                                        Se me olvidó la contraseña
                                    </Link>
                                </form>
                                {
                                    this.state.modalPassword &&
                                    <ModalPassContainer>
                                        <ModalPass handleClick={this.closeModalPass} />
                                    </ModalPassContainer>
                                }
                            </div>
                        )
                        
                    }
                }
                
            </Context.Consumer>
        )
    }
}

export default withRouter(Login);