import React from 'react';
import Layout from '../components/Layout';
import "./styles/diseases.css"

class Diseases extends React.Component {
    render() {
        return (
            <Layout>
                <div className="diseases-container">
                    <div className="disease disease-moko">
                        <h3>Moko</h3>
                    </div>
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
            </Layout>
        );
    }
}

export default Diseases;