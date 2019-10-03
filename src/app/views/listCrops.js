import React from 'react';
import Layout from '../components/Layout';
import "./styles/listCrops.css"

class ListCrops extends React.Component {
    render() {
        return (
            <Layout>
                <div className="listCrops-container">
                    <div className="crop1">
                        <div className="crop1-detail">
                            <h3>Cultivo 1</h3>
                            <p>Cantidad de plantas: 10</p>
                            <p>Fecha: 30/10/2019</p>
                        </div>
                    </div>
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
                    <div className="addCrop">
                        <button className="btnAddCrop">Añadir cultivo</button>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default ListCrops;