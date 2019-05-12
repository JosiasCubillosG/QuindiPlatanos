import React from "react";
import Layout from "../components/Layout";
import Login from "../components/login";
import Recover from "../components/recoverPass";
import ModalPassContainer from "./modalPassContainer";
import ModalPass from "../components/modalPass";

class App extends React.Component {

    state = {
        newPassword: false,
        modalPassword: false,
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            newPassword: true,
        })
    }

    recoverPass = (e) => {
        e.preventDefault();
        this.setState({
            newPassword: false,
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

        if(this.state.newPassword){
            return(
                <Layout>
                    <Recover recoverPass={this.recoverPass} />
                </Layout>
            )
        }else{

            return(
                <React.Fragment>
                    <Layout>
                        <Login handleClick={this.handleClick} />
                        {
                            this.state.modalPassword &&
                            <ModalPassContainer>
                                <ModalPass handleClick={this.closeModalPass} />
                            </ModalPassContainer>
                        }
                    </Layout>
                </React.Fragment>
            )
        }
    }
}

export default App;