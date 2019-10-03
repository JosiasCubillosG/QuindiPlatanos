import React from 'react';
import Layout from '../components/Layout';
import "./styles/detailCrop.css"

class DetailCrop extends React.Component {
    render() {
        return (
            <Layout>
                <div className="detailCrop-container">
                    <div className="detailCrop">
                        <h2>Nombre del cultivo</h2>
                        <p>Numero de plantas: 3</p>
                        <p>30/09/2019</p>
                    </div>
                    <div className="cropTasks">
                        <h3>Tareas:</h3>
                        <div className="cropTaskDetail1">
                            <h4>Abonar</h4>
                            <div className="check">
                                <h6>Dentro de: 2 dias</h6>
                                <div className="checkTask"></div>
                            </div>
                        </div>
                        <div className="cropTaskDetail2">
                            <h4>Fumigar</h4>
                            <div className="check">
                                <h6>Dentro de: 15 dias</h6>
                                <div className="checkTask"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default DetailCrop;