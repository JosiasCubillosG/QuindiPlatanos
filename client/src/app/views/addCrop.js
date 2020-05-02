import React from 'react';
import Layout from '../components/Layout';
import {Link, withRouter} from 'react-router-dom'
import "./styles/addCrop.css"
import Axios from 'axios';
import {GiFarmer,GiFarmTractor} from 'react-icons/gi'
class AddCrop extends React.Component {

    state = {
        name: '',
        plants: '',
        id: '',
    }

    componentDidMount = () => {
        if(this.props.location.state){
            this.setState({
                name: this.props.location.state.name,
                plants: this.props.location.state.plants,
                id: this.props.location.state._id,
            })
        }
    }

    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        })
    }

    addCrop = () => {
        if(this.state.id){
            console.log('Cultivo editado')
            Axios(`/api/lots/${this.state.id}`,{
                method: 'PUT',
                data: {...this.state}
            })
            .then(res => {
                if(res.data.status == 'success'){
                    console.log('Cultivo editado')
                    alert('Cultivo editado')
                    this.props.history.push('/options/crops')
                }else{
                    const error = new Error(res.error)
                    throw error
                }
            })
            .catch(err =>{
                console.log(err)
            })

        }else{
            Axios('/api/lots',{
                method: 'POST',
                data: {...this.state}
            })
            .then(res=>{
                console.log('Cultivo creado')
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
    }

    getTitle = () => {
        return this.state.id ? 'Editar Cultivo' : 'Añadir Cultivo'
    }

    render() {
        return (
            <div className="addCrop-container">
                <h2 className="addCrop-title">{this.getTitle()}</h2>
                <form className="addCrop-form" onSubmit={this.addCrop}>
                    <div className="group-name">
                        <div className="group-name-icon">
                            <GiFarmer className="addCrop-iconName" />
                        </div>
                        
                        <div className="group-name-input">
                            <label className="addCrop-name">Nombre del cultivo</label>       
                            <input className="nameCrop" placeholder="Digite el nombre del cultivo" type="text" onChange={this.handleInputChange} value={this.state.name} name="name" required ></input>
                        </div>
                    </div>
                    
                    <div className="group-numberPlants">
                        <div className="group-numberPlants-icon">
                            <GiFarmTractor className="addCrop-iconPlants" />
                        </div>
                        
                        <div className="group-numberPlants-input">
                            <label className="addCrop-numberPlants">Numero de plantas</label>    
                            <input className="numberPlants" placeholder="Digite el número de plantas" type="text" onChange={this.handleInputChange} value={this.state.plants}  name="plants" required></input>
                        </div>
                        
                    </div>
                                    
                    <button type="submit" value="Submit" className="add-btn">{this.getTitle()}</button>
                </form>
            </div>
        );
    }
}

export default AddCrop;