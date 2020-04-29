import React from 'react';
import Layout from '../components/Layout';
import "./styles/detailCrop.css"
import Axios from 'axios';
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')

class DetailCrop extends React.Component {

    state = {
        lot: [],
        cargando: true,
        error: false,
    }

    componentDidMount = () => {
        Axios(`/api/lots/${this.props.match.params.id}`,{
            method: 'GET'
        })
        .then(res => {
            if(res.data.status == 'success'){
                this.setState({
                    lot: res.data.lot,
                    cargando: false
                })
                console.log(this.state.lot)
            }else{
                const error = new Error(res.error)
                throw error
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {

        const{lot,cargando,error} = this.state

        if(cargando){
            return 'Cargando...'
        }

        return (
            <div className="detailCrop-container">
                <div className="detailCrop">
                    <h2>{lot.name}</h2>
                    <p>Numero de plantas: {lot.plants}</p>
                    <p>{moment(lot.createdDate).format('dddd LL h:s a')}</p>
                </div>
                <div className="cropTasks">
                    <h3>Tareas:</h3>
                    {
                        lot.tasks.map(task => {
                            if(task.state){
                                return(
                                    <div className="cropTaskDetail1">
                                        <h4>{task.name}</h4>
                                        <div className="check">
                                            <h6>Dentro de: {task.days}</h6>
                                            <div className="checkTaskTrue"></div>
                                        </div>
                                    </div>
                                )
                            }else{
                                return(
                                    <div className="cropTaskDetail1">
                                        <h4>{task.name}</h4>
                                        <div className="check">
                                            <h6>Dentro de: {task.days}</h6>
                                            <div className="checkTaskFalse"></div>
                                        </div>
                                    </div>
                                )
                            }
                            
                        })
                    }
                </div>
            </div>
        );
    }
}

export default DetailCrop;