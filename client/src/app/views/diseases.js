import React from 'react';
import Layout from '../components/Layout';
import "./styles/diseases.css"
import { Link } from "react-router-dom"

class Diseases extends React.Component {
    render() {
        return (
            <div className="diseases-container">
                <Link className="disease disease-moko" to="/options/diseases/detail">
                    <h3>Moko</h3>
                </Link>
                
                <div className="disease disease-picudo">
                    <h3>Picudo</h3>
                </div>
                <div className="disease disease-picudo">
                    <h3>Picudo</h3>
                </div>
                <div className="disease disease-moko">
                    <h3>Moko</h3>
                </div>
            </div>
        );
    }
}

export default Diseases;