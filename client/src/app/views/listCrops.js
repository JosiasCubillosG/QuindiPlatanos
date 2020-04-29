import React from 'react';
import Layout from '../components/Layout';
import "./styles/listCrops.css"
import {Link} from "react-router-dom"
import Axios from 'axios';
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')


class ListCrops extends React.Component {

    state = {
        lots: [],
    }

    componentDidMount = () => {
        Axios('/api/lots',{
            method: 'GET'
        })
        .then(res=>{
            if(res.data.status === 'success') {
                this.setState({
                    lots: res.data.lots
                })
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

        const {lots} = this.state


        return (
            <div className="listCrops-container">
                {
                    lots.map(lot => {
                        return(
                            <Link to={`/options/detailCrop/${lot._id}`} className="crop1">
                                <div className="crop1-detail">
                                    <h3>{lot.name}</h3>
                                    <p>Cantidad de plantas: {lot.plants}</p>
                                    <p>Fecha: {moment(lot.createdDate).format('LL')}</p>
                                </div>
                            </Link>
                        )
                    })
                }
                
            
                <Link to="/options/addCrop" className="addCrop">
                    <button className="btnAddCrop">Añadir cultivo</button>
                </Link>
            </div>
        );
    }
}

export default ListCrops;