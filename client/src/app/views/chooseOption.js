import React from 'react'
import Layout from '../components/Layout'
import "./styles/chooseOption.css"
import {Link} from "react-router-dom"
import Context from '../Context'
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')
import Axios from 'axios'

class ChooseOption extends React.Component {

    componentDidMount = async() => {
        try {
            const response = await Axios('/api/lots')
            console.log(response.data.lots)
            response.data.lots.map(lot => {      
                lot.tasks.forEach((task,index) => {
                    console.log(task)
                    if(moment(lot.createdDate).add(task.days, 'minutes').format() <= moment().format() && !task.state){
                        const lotData = Object.assign({},lot)
                        lotData.tasks[index].state = true
                        const status = Axios(`/api/lots/${lot._id}`,{method: 'PUT', data:{lotData}})
                        const t =  Axios('/api/pushNotifications/newNotification',{method:'POST',data: {message:task.name}})
                    }
                })
            })
        }catch(error){
            console.log(error)
        }

        // Axios.get('/api/lots')
        //     .then(res =>{
        //         if(res.data.status == 'success'){
        //             res.data.lots.map(lot => {
        //                 lot.tasks.forEach(async task => {
        //                     if(moment(lot.createdDate).add(task.days, 'minutes').format() <= moment().format() && task.state == false){
        //                         await fetch('/api/pushNotifications/newNotification',{
        //                             method: 'POST',
        //                             body: JSON.stringify({
        //                                 message: task.name
        //                             }),
        //                             headers: {
        //                                 'Content-Type': 'application/json'
        //                             }
        //                         })
        //                             .then(res => {
        //                                 console.log(res)

        //                             })
        //                             .catch(err => {
        //                                 console.log(err)
        //                             })
        //                     }
        //                 });
        //             })
        //         }else{
        //         const error = new Error(res.error)
        //         throw error
        //     }
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        }

    render() {
        return (
            <div className="choose-container">
                <Link to="/options/diseases" className="sickOption">
                    <h2>Enfermedades</h2>
                </Link>

                <Link to="/options/accounting" className="accountingOption">
                    <h2>Contabilidad</h2>
                </Link>  
                <Link to="/options/crops" className="controlOption">
                    <h2>Control</h2>
                </Link>
            </div>
        )
    }
}

export default ChooseOption