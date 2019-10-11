import React from 'react';
import Layout from '../components/Layout';
import "./styles/listCrops.css"
import {Link} from "react-router-dom"

class ListCrops extends React.Component {
    render() {
        return (
            <div className="listCrops-container">
                <Link to="/options/detailCrop" className="crop1">
                    <div className="crop1-detail">
                        <h3>Cultivo 1</h3>
                        <p>Cantidad de plantas: 10</p>
                        <p>Fecha: 30/10/2019</p>
                    </div>
                </Link>
                <div className="crop2">
                    <div className="crop1-detail">
                        <h3>Cultivo 2</h3>
                        <p>Cantidad de plantas: 30</p>
                        <p>Fecha: 30/11/2019</p>
                    </div>
                </div>
                <div className="crop3">
                    <div className="crop1-detail">
                        <h3>Cultivo 3</h3>
                        <p>Cantidad de plantas: 22</p>
                        <p>Fecha: 23/12/2019</p>
                    </div>
                </div>
                <Link to="/options/addCrop" className="addCrop">
                    <button className="btnAddCrop">Añadir cultivo</button>
                </Link>
            </div>
        );
    }
}

export default ListCrops;