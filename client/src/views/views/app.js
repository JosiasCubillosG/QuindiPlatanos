import React from "react";
import Layout from "../components/Layout";
import Login from "../components/login";
import Recover from "../components/recoverPass";
import ModalPassContainer from "./modalPassContainer";
import ModalPass from "../components/modalPass";

class App extends React.Component {

    state = {
        modalPassword: false,
    }


    recoverPass = (e) => {
        e.preventDefault();
        this.setState({
            modalPassword: true,
        })
    }

    closeModalPass = (e) => {
        e.preventDefault();
        this.setState({
            modalPassword: false,
        })
    }

    render(){
        return(
            <React.Fragment>
                    <Login />
                    {
                        this.state.modalPassword &&
                        <ModalPassContainer>
                            <ModalPass handleClick={this.closeModalPass} />
                        </ModalPassContainer>
                    }
            </React.Fragment>
        )
    }
}
export default App;