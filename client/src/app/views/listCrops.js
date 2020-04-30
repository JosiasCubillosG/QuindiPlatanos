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
        this.getCrops()
    }

    getCrops = () => {
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
                                    <p>{lot.plants} plantas</p>
                                    <p>{moment(lot.createdDate).format('DD/MM/YYYY')}</p>
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