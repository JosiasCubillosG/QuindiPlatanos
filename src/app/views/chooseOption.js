import React from 'react'
import Layout from '../components/Layout'
import "./styles/chooseOption.css"

class ChooseOption extends React.Component {
    render() {
        return (
            <Layout>
                <div className="choose-container">
                    <div className="sickOption">
                        <h2>Enfermedades</h2>
                    </div>  
                    <div className="accountingOption">
                        <h2>Contabilidad</h2>
                    </div>
                    <div className="controlOption">
                        <h2>Control</h2>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default ChooseOption