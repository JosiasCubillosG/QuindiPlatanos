import React from 'react';
import Layout from '../components/Layout';
import {Link, withRouter} from 'react-router-dom'
import "./styles/addCrop.css"
import Axios from 'axios';

class AddCrop extends React.Component {

    state = {
        name: '',
        plants: '',
    }

    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        })
    }

    addCrop = (e) => {
        e.preventDefault()
        Axios('/api/lots',{
            method: 'POST',
            data: {...this.state}
        })
        .then(res=>{
            console.log(res)
            if(res.data.status === 'success') {
                alert('Cultivo creado')
                this.props.history.push('/options/crops')
            }else{
                const error = new Error(res.error)
                throw error
            }
        })
        .catch(err =>{
            console.log(err)
        })
    }

    render() {
        return (
            <div className="addCrop-container">
                <h2 className="addCrop-title">Añadir Cultivo</h2>
                <form className="addCrop-form">
                    <label className="addCrop-name">Nombre</label>      
                    <input className="nameCrop" type="text" onChange={this.handleInputChange}  name="name" required ></input>

                    <label className="addCrop-numberPlants">Numero de plantas</label>
                    <input className="numberPlants" type="text" onChange={this.handleInputChange}  name="plants" required></input>
                
                    <button onClick={this.addCrop} to='/options/crops' className="add-btn">Añadir cultivo</button>
                </form>
            </div>
        );
    }
}

export default withRouter(AddCrop);