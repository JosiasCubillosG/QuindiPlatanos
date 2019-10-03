import React from 'react';
import Layout from '../components/Layout';
import "./styles/addCrop.css"

class AddCrop extends React.Component {
    render() {
        return (
            <Layout>
                <div className="addCrop-container">
                    <h2 className="addCrop-title">Añadir Cultivo</h2>
                    <form className="addCrop-form">
                        <label className="addCrop-name">Nombre</label>      
                        <input className="nameCrop" type="text"  name="addCrop" ></input>

                        <label className="addCrop-numberPlants">Numero de plantas</label>
                        <input className="numberPlants" type="text"  name="numberPlants"></input>
                    
                        <button className="add-btn">Añadir cultivo</button>
                    </form>
                </div>
            </Layout>
        );
    }
}

export default AddCrop;